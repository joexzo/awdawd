import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Map from '../../components/Map/Map';
import { useLanguage } from '../../contexts/LanguageContext';
import './AboutPage.scss';

gsap.registerPlugin(ScrollTrigger);

interface AboutPageProps {
  onBackToHome: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBackToHome }) => {
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
      .fromTo('.highlight-item', 
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" }, 
        "-=0.4"
      )
      .fromTo('.intro-image', 
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }, 
        "-=0.8"
      );

    // Анимации при скролле
    gsap.fromTo('.history-timeline .timeline-item', {
      opacity: 0,
      x: -50
    }, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.history-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    gsap.fromTo('.equipment-grid .equipment-card', {
      opacity: 0,
      y: 30
    }, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.equipment-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    gsap.fromTo('.values-grid .value-card', {
      opacity: 0,
      scale: 0.9
    }, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: '.values-section',
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
    <div className="about-page" ref={pageRef}>
      <Navbar />
      {/* About Hero Section */}
      <section className="about-hero-section" ref={heroRef}>
        <div className="content-wrapper">
          <div className="breadcrumb">
            <button className="back-button" onClick={onBackToHome}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {t('about.breadcrumb.home')}
            </button>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{t('about.breadcrumb.current')}</span>
          </div>
          
          <div className="about-intro">
            <div className="intro-content">
                                             <div className="company-badge">
                  <img src="/assets/images/logoalatau.png" alt="Alatau Packaging" className="company-badge-img" />
                  <div className="company-badge-text">
                    <div className="company-badge-title">ALATAU</div>
                    <div className="company-badge-subtitle">PACKAGING</div>
                  </div>
                </div>
              
              <h1 className="page-title">
                {t('about.page.title')}
              </h1>
              
              <p className="intro-text">
                {t('about.page.description')}
              </p>
              
              <div className="company-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L15.09 8.26L22 9L17 14.74L18.18 21.02L12 17.77L5.82 21.02L7 14.74L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="highlight-text">
                    <strong>{t('about.highlight.modern').split(' ')[0]}</strong> {t('about.highlight.modern').split(' ').slice(1).join(' ')}
                  </div>
                </div>
                
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 14S9.5 16 12 16S16 14 16 14" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="9" cy="9" r="1" fill="currentColor"/>
                      <circle cx="15" cy="9" r="1" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="highlight-text">
                    <strong>{t('about.highlight.innovative').split(' ')[0]}</strong> {t('about.highlight.innovative').split(' ').slice(1).join(' ')}
                  </div>
                </div>
                
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="highlight-text">
                    <strong>{t('about.highlight.quality').split(' ')[0]}</strong> {t('about.highlight.quality').split(' ').slice(1).join(' ')}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="intro-image">
              <div className="company-mission">
                <div className="mission-icon">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15.09 8.26L22 9L17 14.74L18.18 21.02L12 17.77L5.82 21.02L7 14.74L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>{t('about.mission.title')}</h3>
                <p>{t('about.mission.description')}</p>
                <div className="mission-stats">
                  <div className="stat-item">
                    <span className="stat-number">2024</span>
                    <span className="stat-label">{t('about.mission.founded')}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">⚡</span>
                    <span className="stat-label">{t('about.mission.innovation')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
             </section>

       {/* Местоположение компании */}
       <section className="location-section">
         <div className="location-decoration"></div>
         <div className="content-wrapper">
           <div className="section-header">
             <h2 className="section-title">{t('about.location.title')}</h2>
             <p className="section-description">
               {t('about.location.description')}
             </p>
           </div>

           <div className="location-content">
             <div className="location-info">
               <div className="location-card">
                 <div className="location-icon">
                   <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                     <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2"/>
                     <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                   </svg>
                 </div>
                 <h3>{t('about.location.address')}</h3>
                 <p>{t('about.location.address.value')}</p>
               </div>

               <div className="location-card">
                 <div className="location-icon">
                   <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                     <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9842 21.5573 21.2132 21.3521 21.4019C21.1469 21.5906 20.9046 21.7349 20.6407 21.8247C20.3768 21.9145 20.0972 21.9478 19.82 21.922H4.18C3.90281 21.9478 3.62321 21.9145 3.35931 21.8247C3.09541 21.7349 2.85311 21.5906 2.64788 21.4019C2.44266 21.2132 2.27907 20.9842 2.16747 20.7292C2.05587 20.4742 1.9989 20.1985 2 19.92V16.92C1.99925 16.6598 2.05051 16.4023 2.15088 16.1627C2.25125 15.9231 2.39869 15.7068 2.58444 15.5266C2.77019 15.3464 2.99021 15.2064 3.23088 15.1154C3.47155 15.0244 3.72756 14.9846 3.985 14.999H20.015C20.2724 14.9846 20.5284 15.0244 20.7691 15.1154C21.0098 15.2064 21.2298 15.3464 21.4156 15.5266C21.6013 15.7068 21.7487 15.9231 21.8491 16.1627C21.9495 16.4023 22.0008 16.6598 22 16.92Z" stroke="currentColor" strokeWidth="2"/>
                     <path d="M7 15H17V11H7V15Z" stroke="currentColor" strokeWidth="2"/>
                   </svg>
                 </div>
                 <h3>{t('about.location.production')}</h3>
                 <p>{t('about.location.production.value')}</p>
               </div>

               <div className="location-card">
                 <div className="location-icon">
                   <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                     <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                 </div>
                 <h3>{t('about.location.research')}</h3>
                 <p>{t('about.location.research.value')}</p>
               </div>
             </div>

             <div className="location-map">
               <Map address="г. Астана, р-н Есиль, Проспект Мангилик Ел, д. 36, Н.п. 78" />
             </div>
           </div>
         </div>
       </section>

      {/* Процесс производства */}
      <section className="history-section">
        <div className="history-decoration"></div>
        <div className="content-wrapper">
          <div className="section-header">
            <h2 className="section-title">{t('about.process.title')}</h2>
            <p className="section-description">
              {t('about.process.description')}
            </p>
          </div>

          <div className="production-layout">
            <div className="production-main">
              <div className="history-timeline">
                <div className="timeline-item">
                  <div className="timeline-year">01</div>
                  <div className="timeline-content">
                    <div className="timeline-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3>{t('about.process.step1.title')}</h3>
                    <p>{t('about.process.step1.description')}</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-year">02</div>
                  <div className="timeline-content">
                    <div className="timeline-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
                        <path d="M6 10H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M6 14H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M14 10H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M14 14H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <h3>{t('about.process.step2.title')}</h3>
                    <p>{t('about.process.step2.description')}</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-year">03</div>
                  <div className="timeline-content">
                    <div className="timeline-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M14.7 6.3A1 1 0 0 0 13 5H5A2 2 0 0 0 3 7V17A2 2 0 0 0 5 19H19A2 2 0 0 0 21 17V9A1 1 0 0 0 19.7 8.3L14.7 6.3Z" stroke="currentColor" strokeWidth="2"/>
                        <path d="M14 8V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M7 11H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M7 15H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <h3>{t('about.process.step3.title')}</h3>
                    <p>{t('about.process.step3.description')}</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-year">04</div>
                  <div className="timeline-content">
                    <div className="timeline-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 1V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M12 21V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M4.22 4.22L5.64 5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M18.36 18.36L19.78 19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M1 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M21 12H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M4.22 19.78L5.64 18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <h3>{t('about.process.step4.title')}</h3>
                    <p>{t('about.process.step4.description')}</p>
                  </div>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-year">05</div>
                  <div className="timeline-content">
                    <div className="timeline-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </div>
                    <h3>{t('about.process.step5.title')}</h3>
                    <p>{t('about.process.step5.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="production-sidebar">
              <div className="tech-highlights">
                <h3>{t('about.tech.title')}</h3>
                <div className="tech-item">
                  <div className="tech-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L15.09 8.26L22 9L17 14.74L18.18 21.02L12 17.77L5.82 21.02L7 14.74L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="tech-content">
                    <h4>{t('about.tech.equipment.title')}</h4>
                    <p>{t('about.tech.equipment.description')}</p>
                  </div>
                </div>
                
                <div className="tech-item">
                  <div className="tech-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 14S9.5 16 12 16S16 14 16 14" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="9" cy="9" r="1" fill="currentColor"/>
                      <circle cx="15" cy="9" r="1" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="tech-content">
                    <h4>{t('about.tech.automation.title')}</h4>
                    <p>{t('about.tech.automation.description')}</p>
                  </div>
                </div>
                
                <div className="tech-item">
                  <div className="tech-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="tech-content">
                    <h4>{t('about.tech.quality.title')}</h4>
                    <p>{t('about.tech.quality.description')}</p>
                  </div>
                </div>
              </div>

              <div className="quality-standards">
                <h3>{t('about.standards.title')}</h3>
                <div className="standard-item">
                  <div className="standard-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span>{t('about.standards.food')}</span>
                </div>
                
                <div className="standard-item">
                  <div className="standard-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span>{t('about.standards.eco')}</span>
                </div>
                
                <div className="standard-item">
                  <div className="standard-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span>{t('about.standards.international')}</span>
                </div>
              </div>

              <div className="environmental-commitment">
                <h3>{t('about.environment.title')}</h3>
                <div className="eco-stats">
                  <div className="eco-stat">
                    <div className="eco-number">100%</div>
                    <div className="eco-label">{t('about.environment.waste')}</div>
                  </div>
                  <div className="eco-stat">
                    <div className="eco-number">0%</div>
                    <div className="eco-label">{t('about.environment.emissions')}</div>
                  </div>
                  <div className="eco-stat">
                    <div className="eco-number">♻️</div>
                    <div className="eco-label">{t('about.environment.materials')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Достижения компании */}
      <section className="achievements-section">
        <div className="achievements-decoration"></div>
        <div className="content-wrapper">
          <div className="section-header">
            <h2 className="section-title">{t('about.achievements.title')}</h2>
            <p className="section-description">
              {t('about.achievements.description')}
            </p>
          </div>

          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15.09 8.26L22 9L17 14.74L18.18 21.02L12 17.77L7.82 20.02L7 14.74L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="achievement-number">2024</div>
              <h3>{t('about.achievements.founded')}</h3>
              <p>{t('about.achievements.founded.description')}</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="achievement-number">50+</div>
              <h3>{t('about.achievements.employees')}</h3>
              <p>{t('about.achievements.employees.description')}</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="achievement-number">100%</div>
              <h3>{t('about.achievements.quality')}</h3>
              <p>{t('about.achievements.quality.description')}</p>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="achievement-number">20+</div>
              <h3>{t('about.achievements.products')}</h3>
              <p>{t('about.achievements.products.description')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="equipment-section">
        <div className="equipment-decoration"></div>
        <div className="content-wrapper">
          <div className="section-header">
            <h2 className="section-title">{t('about.equipment.title')}</h2>
            <p className="section-description">
              {t('about.equipment.description')}
            </p>
          </div>

          <div className="equipment-grid">
            <div className="equipment-card">
              <div className="equipment-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M6 10H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M6 14H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M14 10H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M14 14H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>{t('about.equipment.extrusion.title')}</h3>
              <p>{t('about.equipment.extrusion.description')}</p>
              <div className="equipment-specs">
                <span>{t('about.equipment.extrusion.spec')}</span>
              </div>
            </div>

            <div className="equipment-card">
              <div className="equipment-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 1V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 21V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M4.22 4.22L5.64 5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M18.36 18.36L19.78 19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M1 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M21 12H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M4.22 19.78L5.64 18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>{t('about.equipment.printing.title')}</h3>
              <p>{t('about.equipment.printing.description')}</p>
              <div className="equipment-specs">
                <span>{t('about.equipment.printing.spec')}</span>
              </div>
            </div>

            <div className="equipment-card">
              <div className="equipment-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M14.7 6.3A1 1 0 0 0 13 5H5A2 2 0 0 0 3 7V17A2 2 0 0 0 5 19H19A2 2 0 0 0 21 17V9A1 1 0 0 0 19.7 8.3L14.7 6.3Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M14 8V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M7 11H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M7 15H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>{t('about.equipment.laminating.title')}</h3>
              <p>{t('about.equipment.laminating.description')}</p>
              <div className="equipment-specs">
                <span>{t('about.equipment.laminating.spec')}</span>
              </div>
            </div>

            <div className="equipment-card">
              <div className="equipment-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 8V4A2 2 0 0 0 10 2H8A2 2 0 0 0 6 4V8" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 14H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 11V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>{t('about.equipment.packaging.title')}</h3>
              <p>{t('about.equipment.packaging.description')}</p>
              <div className="equipment-specs">
                <span>{t('about.equipment.packaging.spec')}</span>
              </div>
            </div>

            <div className="equipment-card">
              <div className="equipment-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M9 2V8H15V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 8H18L16 21H8L6 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="14" r="2" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>{t('about.equipment.laboratory.title')}</h3>
              <p>{t('about.equipment.laboratory.description')}</p>
              <div className="equipment-specs">
                <span>{t('about.equipment.laboratory.spec')}</span>
              </div>
            </div>

            <div className="equipment-card">
              <div className="equipment-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M7 4V2A1 1 0 0 1 8 1H16A1 1 0 0 1 17 2V4H20A1 1 0 0 1 21 5V6A1 1 0 0 1 20 7H19V20A2 2 0 0 1 17 22H7A2 2 0 0 1 5 20V7H4A1 1 0 0 1 3 6V5A1 1 0 0 1 4 4H7Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 9L15 15M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>{t('about.equipment.recycling.title')}</h3>
              <p>{t('about.equipment.recycling.description')}</p>
              <div className="equipment-specs">
                <span>{t('about.equipment.recycling.spec')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ценности компании */}
      <section className="values-section">
        <div className="values-decoration"></div>
        <div className="content-wrapper">
          <div className="section-header">
            <h2 className="section-title">{t('about.values.title')}</h2>
            <p className="section-description">
              {t('about.values.description')}
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="2" fill="currentColor"/>
                </svg>
              </div>
              <h3>{t('about.values.quality.title')}</h3>
              <p>{t('about.values.quality.description')}</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M6 2L3 6V20A2 2 0 0 0 5 22H19A2 2 0 0 0 21 20V6L18 2H6Z" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="9,9 12,6 15,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="6" x2="12" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>{t('about.values.innovation.title')}</h3>
              <p>{t('about.values.innovation.description')}</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 2A10 10 0 0 0 8.34 4.31C9.34 5.36 10.34 6.65 11 8.16C11.56 9.45 11.8 10.91 12 12.34C12.2 10.91 12.44 9.45 13 8.16C13.66 6.65 14.66 5.36 15.66 4.31A10 10 0 0 0 12 2Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 14C15.5 16 14 17 12 17S8.5 16 8 14" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>{t('about.values.ecology.title')}</h3>
              <p>{t('about.values.ecology.description')}</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M16 21V19A2 2 0 0 0 14 17H10A2 2 0 0 0 8 19V21" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M6 21V19A2 2 0 0 1 8 17H10" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="3" cy="9" r="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M18 21V19A2 2 0 0 0 16 17H14" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="21" cy="9" r="2" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>{t('about.values.partnership.title')}</h3>
              <p>{t('about.values.partnership.description')}</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>{t('about.values.efficiency.title')}</h3>
              <p>{t('about.values.efficiency.description')}</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9H4.5A2.5 2.5 0 0 1 2 6.5A2.5 2.5 0 0 1 4.5 4A2.5 2.5 0 0 1 7 6.5V9Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M14 9H12L10 16H14L12 22L20 13H16L18 9H14Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M6 9H18" stroke="currentColor" strokeWidth="2"/>
                  <path d="M22 9H20.5A2.5 2.5 0 0 1 18 6.5A2.5 2.5 0 0 1 20.5 4A2.5 2.5 0 0 1 23 6.5V9Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>{t('about.values.leadership.title')}</h3>
              <p>{t('about.values.leadership.description')}</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;