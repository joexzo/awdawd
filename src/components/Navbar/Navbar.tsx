import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage, Language } from '../../contexts/LanguageContext';
import './Navbar.scss';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const { currentLanguage, setLanguage, t } = useLanguage();
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

  // Функция для определения текущей страницы
  const isActivePage = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Закрытие языкового меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
    };

    if (isLanguageMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageMenuOpen]);

  const getFlagForLanguage = (lang: Language) => {
    switch (lang) {
      case 'RU': return '🇷🇺';
      case 'KZ': return '🇰🇿';
      case 'EN': return '🇺🇸';
      default: return '🇰🇿';
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <img src="/assets/images/logoalatau.png" alt="Alatau Packaging" className="navbar__logo-img" />
          <div className="navbar__logo-text">
            <div className="navbar__logo-title">ALATAU</div>
            <div className="navbar__logo-subtitle">PACKAGING</div>
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="navbar__menu navbar__menu--desktop">
          <Link 
            to="/" 
            className={`navbar__link ${isActivePage('/') ? 'navbar__link--active' : ''}`}
          >
            {t('nav.home')}
          </Link>
          <Link 
            to="/about" 
            className={`navbar__link ${isActivePage('/about') ? 'navbar__link--active' : ''}`}
          >
            {t('nav.about')}
          </Link>
          <Link 
            to="/products" 
            className={`navbar__link ${isActivePage('/products') ? 'navbar__link--active' : ''}`}
          >
            {t('nav.products')}
          </Link>
          <Link 
            to="/contacts" 
            className={`navbar__link ${isActivePage('/contacts') ? 'navbar__link--active' : ''}`}
          >
            {t('nav.contacts')}
          </Link>
        </div>
        
        {/* Desktop Language Switcher */}
        <div className="navbar__language-switcher navbar__language-switcher--desktop">
          <div className="navbar__language-container" ref={languageMenuRef}>
            <button 
              className="navbar__language-btn"
              onClick={toggleLanguageMenu}
              aria-label="Language switcher"
            >
              <span className="navbar__language-flag">{getFlagForLanguage(currentLanguage)}</span>
              <span className="navbar__language-text">{currentLanguage}</span>
              <span className={`navbar__language-arrow ${isLanguageMenuOpen ? 'navbar__language-arrow--active' : ''}`}>
                ▼
              </span>
            </button>
            
            {isLanguageMenuOpen && (
              <div className="navbar__language-dropdown">
                <button 
                  className={`navbar__language-option ${currentLanguage === 'RU' ? 'navbar__language-option--active' : ''}`}
                  onClick={() => changeLanguage('RU')}
                >
                  <span className="navbar__language-flag">🇷🇺</span>
                  <span>RU</span>
                </button>
                <button 
                  className={`navbar__language-option ${currentLanguage === 'KZ' ? 'navbar__language-option--active' : ''}`}
                  onClick={() => changeLanguage('KZ')}
                >
                  <span className="navbar__language-flag">🇰🇿</span>
                  <span>KZ</span>
                </button>
                <button 
                  className={`navbar__language-option ${currentLanguage === 'EN' ? 'navbar__language-option--active' : ''}`}
                  onClick={() => changeLanguage('EN')}
                >
                  <span className="navbar__language-flag">🇺🇸</span>
                  <span>EN</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`navbar__mobile-toggle ${isMobileMenuOpen ? 'navbar__mobile-toggle--active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile-menu ${isMobileMenuOpen ? 'navbar__mobile-menu--open' : ''}`}>
        <div className="navbar__mobile-menu-content">
          <div className="navbar__mobile-links">
            <Link 
              to="/" 
              className={`navbar__mobile-link ${isActivePage('/') ? 'navbar__mobile-link--active' : ''}`} 
              onClick={closeMobileMenu}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/about" 
              className={`navbar__mobile-link ${isActivePage('/about') ? 'navbar__mobile-link--active' : ''}`} 
              onClick={closeMobileMenu}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to="/products" 
              className={`navbar__mobile-link ${isActivePage('/products') ? 'navbar__mobile-link--active' : ''}`} 
              onClick={closeMobileMenu}
            >
              {t('nav.products')}
            </Link>
            <Link 
              to="/contacts" 
              className={`navbar__mobile-link ${isActivePage('/contacts') ? 'navbar__mobile-link--active' : ''}`} 
              onClick={closeMobileMenu}
            >
              {t('nav.contacts')}
            </Link>
          </div>
          
          {/* Mobile Language Switcher */}
          <div className="navbar__mobile-language">
            <div className="navbar__mobile-language-title">{t('nav.language')}</div>
            <div className="navbar__mobile-language-options">
              <button 
                className={`navbar__mobile-language-option ${currentLanguage === 'RU' ? 'navbar__mobile-language-option--active' : ''}`}
                onClick={() => {
                  changeLanguage('RU');
                  closeMobileMenu();
                }}
              >
                <span className="navbar__language-flag">🇷🇺</span>
                <span>Русский</span>
              </button>
              <button 
                className={`navbar__mobile-language-option ${currentLanguage === 'KZ' ? 'navbar__mobile-language-option--active' : ''}`}
                onClick={() => {
                  changeLanguage('KZ');
                  closeMobileMenu();
                }}
              >
                <span className="navbar__language-flag">🇰🇿</span>
                <span>Қазақша</span>
              </button>
              <button 
                className={`navbar__mobile-language-option ${currentLanguage === 'EN' ? 'navbar__mobile-language-option--active' : ''}`}
                onClick={() => {
                  changeLanguage('EN');
                  closeMobileMenu();
                }}
              >
                <span className="navbar__language-flag">🇺🇸</span>
                <span>English</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 