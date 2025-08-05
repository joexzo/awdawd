import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { useLanguage } from '../../contexts/LanguageContext';

const equipmentSlides = [
  {
    image: 'https://www.wh.group/media/products/extrusion/filmex/16_filmex_extruder_3840x2880_r_8_5_res_586x371.jpg',
    alt: 'Filmex Extruder'
  },
  {
    image: 'https://www.kuhne-group.com/fileadmin/_processed_/7/5/csm_180405_Kuhne__AHC4335_mod_2f76df90ef.webp',
    alt: 'Kuhne Equipment'
  },
  {
    image: 'https://www.flexotechmag.com/wp-content/uploads/Comexi-F2-MB-scaled.jpg',
    alt: 'Comexi F2 MB'
  }
];

interface QualitySectionProps {
  onMount?: (ref: React.RefObject<HTMLDivElement | null>) => void;
}

const QualitySection: React.FC<QualitySectionProps> = ({ onMount }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  const qualityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (onMount) {
      onMount(qualityRef);
    }
  }, [onMount]);

  useEffect(() => {
    let timer: number;
    
    if (!isAutoScrollPaused) {
      timer = window.setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % equipmentSlides.length);
      }, 5000);
    }

    return () => {
      if (timer) window.clearInterval(timer);
    };
  }, [isAutoScrollPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % equipmentSlides.length);
    setIsAutoScrollPaused(true);
    setTimeout(() => setIsAutoScrollPaused(false), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + equipmentSlides.length) % equipmentSlides.length);
    setIsAutoScrollPaused(true);
    setTimeout(() => setIsAutoScrollPaused(false), 10000);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoScrollPaused(true);
    setTimeout(() => setIsAutoScrollPaused(false), 10000);
  };

  return (
    <section className="quality-section" ref={qualityRef}>
      <div className="content-wrapper">
        <div className="section-content">
          <div className="content-left">
            <div className="section-label">{t('quality.label')}</div>
            <h2 className="section-title">
              {t('quality.title')}
            </h2>
            <p className="section-description">
              {t('quality.description')}
            </p>
            <div className="button-group">
              <Button variant="outline" onClick={() => navigate('/about')}>{t('common.learnMore')}</Button>
            </div>
          </div>
          <div className="content-right">
            <div 
              className="custom-slider mobile-optimized"
              onMouseEnter={() => setIsAutoScrollPaused(true)}
              onMouseLeave={() => setIsAutoScrollPaused(false)}
            >
              <button className="slider-arrow slider-arrow-prev" onClick={prevSlide}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="slider-container">
                {equipmentSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`slider-slide ${index === currentSlide ? 'active' : ''}`}
                    style={{
                      transform: `translateX(${(index - currentSlide) * 100}%)`,
                    }}
                  >
                    <img src={slide.image} alt={slide.alt} />
                  </div>
                ))}
              </div>
              <button className="slider-arrow slider-arrow-next" onClick={nextSlide}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="slider-dots">
                {equipmentSlides.map((_, index) => (
                  <button
                    key={index}
                    className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;