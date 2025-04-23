import React, { useState, useEffect } from 'react';
import './ProductionLineDetail.scss';
import Button from '../Button/Button';

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
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Небольшая задержка для плавного появления
    requestAnimationFrame(() => {
      setIsActive(true);
    });
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
        >
          ✕
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
              Посетить сайт производителя
            </Button>
            <Button 
              variant="secondary"
              onClick={handleClose}
            >
              Закрыть
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionLineDetail; 