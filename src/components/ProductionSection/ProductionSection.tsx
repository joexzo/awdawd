import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { useLanguage } from '../../contexts/LanguageContext';

// Базовые данные для линий производства (без переводов)
const baseProductionLines = [
  {
    id: 'windmoller',
    image: 'https://media.licdn.com/dms/image/v2/C4E0BAQGTGNVxvTmcjg/company-logo_200_200/company-logo_200_200/0/1632819028035/windmoeller__hoelscher_group_logo?e=2147483647&v=beta&t=kmDI8_m0O8xfQhjhnO68jjb_C7qMDNG5w2o2i0maqMw',
    equipmentImage: 'https://www.wh.group/media/products/extrusion/filmex/16_filmex_extruder_3840x2880_r_8_5_res_586x371.jpg',
    link: 'https://www.wh.group/en/extrusion/'
  },
  {
    id: 'kuhne',
    image: 'https://www.kuhne-group.com/typo3conf/ext/if_sitepackage_kunde/Resources/Public/Images/logo.svg',
    equipmentImage: 'https://www.kuhne-group.com/fileadmin/_processed_/7/5/csm_180405_Kuhne__AHC4335_mod_2f76df90ef.webp',
    link: 'https://www.kuhne-group.com/'
  },
  {
    id: 'comexi',
    image: 'https://yt3.googleusercontent.com/ytc/AIdro_kWvMQijfAozZV2A8ox-aYVLoI0zwHNkzvp01RLOUpxHg=s900-c-k-c0x00ffffff-no-rj',
    equipmentImage: 'https://www.flexotechmag.com/wp-content/uploads/Comexi-F2-MB-scaled.jpg',
    link: 'https://www.comexi.com/'
  }
];

// Функция для получения переведенных данных линий производства
const getProductionLines = (t: (key: string) => string) => {
  return baseProductionLines.map(line => {
    const titleKey = `production.${line.id}.title`;
    const descriptionKey = `production.${line.id}.description`;
    const specKeys = [
      `production.${line.id}.spec1`,
      `production.${line.id}.spec2`,
      `production.${line.id}.spec3`,
      `production.${line.id}.spec4`
    ];

    return {
      title: t(titleKey),
      description: t(descriptionKey),
      image: line.image,
      equipmentImage: line.equipmentImage,
      link: line.link,
      specifications: specKeys.map(key => t(key))
    };
  });
};

interface ProductionSectionProps {
  onMount?: (ref: React.RefObject<HTMLDivElement | null>) => void;
  onLineSelect?: (line: ReturnType<typeof getProductionLines>[0]) => void;
}

const ProductionSection: React.FC<ProductionSectionProps> = ({ onMount, onLineSelect }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const productionRef = useRef<HTMLDivElement>(null);
  
  // Получаем переведенные данные линий производства
  const productionLines = getProductionLines(t);

  useEffect(() => {
    if (onMount) {
      onMount(productionRef);
    }
  }, [onMount]);

  return (
    <section className="production-lines" ref={productionRef}>
      <div className="content-wrapper">
        <div className="section-label">{t('production.label')}</div>
        <h2 className="section-title">
          {t('production.title')}
        </h2>
        <p className="section-description">
          {t('production.description')}
        </p>
        
        <div className="production-lines__grid">
          {productionLines && productionLines.length > 0 ? (
            productionLines.map((line, index) => (
              <div 
                key={index} 
                className="production-line-card"
                onClick={() => onLineSelect && onLineSelect(line)}
              >
                <div className="production-line-card__icon">
                  <img 
                    src={line.image} 
                    alt={line.title}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                </div>
                <h3 className="production-line-card__title">{line.title}</h3>
                <p className="production-line-card__description">
                  {line.description.split('.')[0]}.
                </p>
              </div>
            ))
          ) : (
            <div>{t('production.noLines')}</div>
          )}
        </div>

        <div className="button-group">
          <Button variant="outline" onClick={() => navigate('/about')}>{t('common.learnMore')}</Button>
        </div>
      </div>
    </section>
  );
};

export { getProductionLines };
export default ProductionSection;