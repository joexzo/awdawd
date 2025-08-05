import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { useLanguage } from '../../contexts/LanguageContext';

interface PackagingSectionProps {
  onMount?: (ref: React.RefObject<HTMLDivElement | null>) => void;
}

const PackagingSection: React.FC<PackagingSectionProps> = ({ onMount }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const packagingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (onMount) {
      onMount(packagingRef);
    }
  }, [onMount]);

  return (
    <section className="packaging-section" ref={packagingRef}>
      <div className="content-wrapper">
        <div className="section-label">{t('packaging.label')}</div>
        <div className="section-content">
          <h2 className="section-title">
            {t('packaging.title')}
          </h2>
          <p className="section-description">
            {t('packaging.description')}
          </p>
          <div className="button-group">
            <Button variant="outline" onClick={() => navigate('/about')}>{t('common.learnMore')}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagingSection;