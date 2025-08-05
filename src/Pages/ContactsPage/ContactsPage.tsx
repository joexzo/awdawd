import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Map from '../../components/Map/Map';
import { useLanguage } from '../../contexts/LanguageContext';
import './ContactsPage.scss';

gsap.registerPlugin(ScrollTrigger);

interface ContactsPageProps {
  onBackToHome: () => void;
}

const ContactsPage: React.FC<ContactsPageProps> = ({ onBackToHome }) => {
  const { t } = useLanguage();
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Анимация появления страницы
    const timeline = gsap.timeline();
    
    timeline
      .fromTo('.breadcrumb', 
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      )
      .fromTo('.company-badge', 
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }, 
        "-=0.3"
      )
      .fromTo('.page-title', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 
        "-=0.4"
      )
      .fromTo('.intro-text', 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 
        "-=0.3"
      )
      .fromTo('.contact-card', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" }, 
        "-=0.4"
      );

    // Анимации при скролле
    gsap.fromTo('.info-card', {
      opacity: 0,
      x: -50
    }, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.info-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    gsap.fromTo('.map-container', {
      opacity: 0,
      scale: 0.9
    }, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.map-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="contacts-page" ref={pageRef}>
      <Navbar />
      
      {/* Contacts Hero Section */}
      <section className="contacts-hero-section" ref={heroRef}>
        <div className="content-wrapper">
          <div className="breadcrumb">
            <button className="back-button" onClick={onBackToHome}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {t('contacts.breadcrumb.home')}
            </button>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{t('contacts.breadcrumb.current')}</span>
          </div>
          
          <div className="contacts-intro">
            <div className="intro-content">
              <div className="company-badge">
                <img src="/assets/images/logoalatau.png" alt="Alatau Packaging" className="company-badge-img" />
                <div className="company-badge-text">
                  <div className="company-badge-title">ALATAU</div>
                  <div className="company-badge-subtitle">PACKAGING</div>
                </div>
              </div>
              
              <h1 className="page-title">
                {t('contacts.page.title')}
              </h1>
              
              <p className="intro-text">
                {t('contacts.page.description')}
              </p>
              
              <div className="contact-cards">
                <div className="contact-card">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="contact-info">
                    <h3>{t('contacts.phone.title')}</h3>
                    <p>{t('contacts.phone.value')}</p>
                    <span>{t('contacts.phone.hours')}</span>
                  </div>
                </div>
                
                <div className="contact-card">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="contact-info">
                    <h3>{t('contacts.email.title')}</h3>
                    <p>{t('contacts.email.value')}</p>
                    <span>{t('contacts.email.response')}</span>
                  </div>
                </div>
                
                <div className="contact-card">
                  <div className="contact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                                           <div className="contact-info">
                           <h3>{t('contacts.address.title')}</h3>
                           <p>{t('contacts.address.value')}</p>
                           <span>{t('contacts.address.description')}</span>
                         </div>
                </div>
              </div>
            </div>
            
            <div className="intro-image">
              <div className="location-display">
                <div className="map-preview">
                  <div className="map-background">
                    <div className="map-grid"></div>
                    <div className="location-marker">
                      <div className="marker-pulse"></div>
                      <div className="marker-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                    </div>
                    <div className="map-roads">
                      <div className="road road-1"></div>
                      <div className="road road-2"></div>
                      <div className="road road-3"></div>
                    </div>
                    <div className="map-buildings">
                      <div className="building building-1"></div>
                      <div className="building building-2"></div>
                      <div className="building building-3"></div>
                      <div className="building building-4"></div>
                    </div>
                  </div>
                </div>
                <div className="location-info">
                  <div className="location-title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>{t('contacts.location.title')}</span>
                  </div>
                  <div className="location-details">
                    <div className="detail-line">
                      <span className="detail-label">{t('contacts.location.city')}</span>
                      <span className="detail-value">{t('contacts.location.city.value')}</span>
                    </div>
                    <div className="detail-line">
                      <span className="detail-label">{t('contacts.location.district')}</span>
                      <span className="detail-value">{t('contacts.location.district.value')}</span>
                    </div>
                    <div className="detail-line">
                      <span className="detail-label">{t('contacts.location.address')}</span>
                      <span className="detail-value">{t('contacts.location.address.value')}</span>
                    </div>
                  </div>
                  <div className="location-status">
                    <div className="status-indicator">
                      <div className="status-dot"></div>
                      <span>{t('contacts.location.status')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Информация о компании */}
      <section className="info-section">
        <div className="info-decoration"></div>
        <div className="content-wrapper">
          <div className="section-header">
            <h2 className="section-title">{t('contacts.info.title')}</h2>
            <p className="section-description">
              {t('contacts.info.description')}
            </p>
          </div>

          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <rect x="7" y="7" width="10" height="6" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>{t('contacts.info.name.title')}</h3>
              <div className="info-content">
                <p><strong>{t('contacts.info.name.ru')}</strong> {t('contacts.info.name.ru.value')}</p>
                <p><strong>{t('contacts.info.name.kz')}</strong> {t('contacts.info.name.kz.value')}</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15.09 8.26L22 9L17 14.74L18.18 21.02L12 17.77L5.82 21.02L7 14.74L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>{t('contacts.info.director.title')}</h3>
              <div className="info-content">
                <p><strong>{t('contacts.info.director.name')}</strong></p>
                <p>{t('contacts.info.director.position')}</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>{t('contacts.info.bin.title')}</h3>
              <div className="info-content">
                <p><strong>{t('contacts.info.bin.value')}</strong></p>
                <p>{t('contacts.info.bin.description')}</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M6 2L3 6V20A2 2 0 0 0 5 22H19A2 2 0 0 0 21 20V6L18 2H6Z" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="9,9 12,6 15,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="6" x2="12" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>{t('contacts.info.date.title')}</h3>
              <div className="info-content">
                <p><strong>{t('contacts.info.date.value')}</strong></p>
                <p>{t('contacts.info.date.description')}</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15.09 8.26L22 9L17 14.74L18.18 21.02L12 17.77L5.82 21.02L7 14.74L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>{t('contacts.info.oked.title')}</h3>
              <div className="info-content">
                <p><strong>{t('contacts.info.oked.value')}</strong></p>
                <p>{t('contacts.info.oked.description')}</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M16 21V19A2 2 0 0 0 14 17H10A2 2 0 0 0 8 19V21" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>{t('contacts.info.krp.title')}</h3>
              <div className="info-content">
                <p><strong>{t('contacts.info.krp.value')}</strong></p>
                <p>{t('contacts.info.krp.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Карта и дополнительная информация */}
      <section className="map-section">
        <div className="map-decoration"></div>
        <div className="content-wrapper">
          <div className="section-header">
            <h2 className="section-title">{t('contacts.map.title')}</h2>
            <p className="section-description">
              {t('contacts.map.description')}
            </p>
          </div>

                           <div className="map-container">
                   <Map address="г. Астана, р-н Есиль, Проспект Мангилик Ел, д. 36, Н.п. 78" />
            
            <div className="location-details">
              <div className="detail-item">
                <div className="detail-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15.09 8.26L22 9L17 14.74L18.18 21.02L12 16.77L7.82 20.02L7 14.74L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                                       <div className="detail-content">
                         <h4>{t('contacts.map.address.title')}</h4>
                         <p>{t('contacts.map.address.value')}</p>
                       </div>
              </div>
              
              <div className="detail-item">
                <div className="detail-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="detail-content">
                  <h4>{t('contacts.map.hours.title')}</h4>
                  <p>{t('contacts.map.hours.value')}</p>
                </div>
              </div>
              
              <div className="detail-item">
                <div className="detail-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15.09 8.26L22 9L17 14.74L18.18 21.02L12 17.77L5.82 21.02L7 14.74L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="detail-content">
                  <h4>{t('contacts.map.transport.title')}</h4>
                  <p>{t('contacts.map.transport.value')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactsPage; 