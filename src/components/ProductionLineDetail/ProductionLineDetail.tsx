import React, { useState, useEffect } from 'react';
import './ProductionLineDetail.scss';
import Button from '../Button/Button';
import { useLanguage } from '../../contexts/LanguageContext';

interface ProductionLineDetailProps {
  title: string;
  description: string;
  image: string;
  equipmentImage: string;
  link: string;
  specifications: string[];
  onClose: () => void;
}

const ProductionLineDetail: React.FC<ProductionLineDetailProps> = ({
  title,
  description,
  equipmentImage,
  link,
  specifications,
  onClose,
}) => {
  const { t } = useLanguage();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Небольшая задержка для плавного появления
    requestAnimationFrame(() => {
      setIsActive(true);
    });

    // Обработчик клавиши ESC
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    // Добавляем обработчик события
    document.addEventListener('keydown', handleKeyDown);

    // Предотвращаем прокрутку body при открытом модальном окне
    document.body.style.overflow = 'hidden';

    // Очистка при размонтировании
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setIsActive(false);
    setTimeout(onClose, 300); // Соответствует длительности анимации
  };

  return (
    <div className="production-line-detail">
      <div 
        className={`production-line-detail__overlay ${isActive ? 'active' : ''}`} 
        onClick={handleClose} 
      />
      <div className={`production-line-detail__content ${isActive ? 'active' : ''}`}>
        <button 
          className="production-line-detail__close" 
          onClick={handleClose}
          aria-label={t('modal.closeModal')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="production-line-detail__image">
          <img src={equipmentImage} alt={title} />
        </div>
        <div className="production-line-detail__info">
          <h2 className="production-line-detail__title">
            {title}
          </h2>
          <p className="production-line-detail__description">
            {description}
          </p>
          <div className="production-line-detail__specifications">
            {specifications.map((spec, index) => (
              <p 
                key={index} 
                className="production-line-detail__spec"
              >
                {spec}
              </p>
            ))}
          </div>
          <div className="production-line-detail__actions">
            <Button 
              variant="primary"
              onClick={() => window.open(link, '_blank')}
            >
              {t('modal.visitWebsite')}
            </Button>
            <Button 
              variant="secondary"
              onClick={handleClose}
            >
              {t('modal.close')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionLineDetail; 