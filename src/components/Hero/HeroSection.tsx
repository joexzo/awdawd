import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import ParticleEffect from '../ParticleEffect/ParticleEffect';
import { useLanguage } from '../../contexts/LanguageContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const heroSlides = [
  {
    image: 'https://happylove.top/uploads/posts/2023-06/1687385591_happylove-top-p-kazakhstan-kartinki-krasivo-59.jpg',
    alt: 'EXPO Astana Sphere View 1'
  },
  {
    image: 'https://pohcdn.com/sites/default/files/styles/big_gallery_image/public/text_gallery/Astana-4.jpg',
    alt: 'EXPO Astana Sphere View 2'
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=2c6dae8c4afeb1f3dd3d43cb07688ce7_l-2480692-images-thumbs&n=13',
    alt: 'Kazakhstan landscape'
  }
];

// Fallback изображения для мобильных устройств
const fallbackImages = [
  'https://via.placeholder.com/400x300/4A90E2/FFFFFF?text=ALATAU+PACKAGING',
  'https://via.placeholder.com/400x300/50C878/FFFFFF?text=КАЧЕСТВЕННАЯ+УПАКОВКА',
  'https://via.placeholder.com/400x300/FF6B35/FFFFFF?text=НАДЕЖНЫЙ+ПАРТНЕР'
];

interface HeroSectionProps {
  onMount?: (ref: React.RefObject<HTMLDivElement | null>) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onMount }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [isHeroAutoScrollPaused, setIsHeroAutoScrollPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Функция для определения мобильного устройства
  const checkMobile = () => {
    const mobile = window.innerWidth <= 768;
    setIsMobile(mobile);
    return mobile;
  };

  // Анимация счетчика
  const animateCounter = (element: HTMLElement, target: number, duration: number = 2000) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current) + '%';
    }, 16);
  };

  // Обработчик клика по статистике
  const handleStatClick = (statType: string) => {
    const statElement = document.querySelector(`[data-stat="${statType}"]`);
    if (statElement) {
      statElement.classList.add('stat-clicked');
      setTimeout(() => {
        statElement.classList.remove('stat-clicked');
      }, 300);
    }
  };


  useEffect(() => {
    // Проверяем размер экрана при загрузке
    checkMobile();
    
    if (onMount) {
      onMount(heroRef);
    }
    
    // Анимации появления только для десктопа (не для мобильных)
    if (!isMobile) {
      const timeline = gsap.timeline();
      
      timeline
        .fromTo('.title-line', 
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
        )
        .fromTo('.hero-description-animated', 
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 
          "-=0.3"
        )
        .fromTo('.stat-item', 
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" }, 
          "-=0.3"
        )
        .fromTo('.hero-buttons-animated', 
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 
          "-=0.4"
        )
        .fromTo('.hero-slider', 
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }, 
          "-=0.6"
        );
    }

    // Анимация фоновых фигур (только для десктопа)
    if (!isMobile) {
      gsap.to('.shape-1', {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      });

      gsap.to('.shape-2', {
        rotation: -360,
        duration: 25,
        repeat: -1,
        ease: "none"
      });

      gsap.to('.shape-3', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    }

    // Обработчик изменения размера окна
    const handleResize = () => {
      const newIsMobile = checkMobile();
      
      // Останавливаем анимации фигур на мобильных
      if (newIsMobile) {
        gsap.killTweensOf('.shape-1');
        gsap.killTweensOf('.shape-2');
        gsap.killTweensOf('.shape-3');
      } else {
        // Запускаем анимации фигур на десктопе
        gsap.to('.shape-1', {
          rotation: 360,
          duration: 20,
          repeat: -1,
          ease: "none"
        });

        gsap.to('.shape-2', {
          rotation: -360,
          duration: 25,
          repeat: -1,
          ease: "none"
        });

        gsap.to('.shape-3', {
          y: -20,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut"
        });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, [onMount, isMobile]);

  // Анимация счетчика при появлении в viewport
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counterElement = entry.target.querySelector('.stat-number[data-value]') as HTMLElement;
          if (counterElement && !counterElement.classList.contains('animated')) {
            counterElement.classList.add('animated');
            const targetValue = parseInt(counterElement.getAttribute('data-value') || '0');
            animateCounter(counterElement, targetValue);
          }
        }
      });
    }, { threshold: 0.5 });

    const statsContainer = document.querySelector('.hero-stats');
    if (statsContainer) {
      observer.observe(statsContainer);
    }

    return () => {
      if (statsContainer) {
        observer.unobserve(statsContainer);
      }
    };
  }, []);

  useEffect(() => {
    let timer: number;
    
    const interval = isMobile ? 7000 : 5000; // Более медленная прокрутка на мобильных
    
    if (!isHeroAutoScrollPaused) {
      timer = window.setInterval(() => {
        setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
      }, interval);
    }

    return () => {
      if (timer) window.clearInterval(timer);
    };
  }, [isHeroAutoScrollPaused, isMobile]);

  const nextHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    setIsHeroAutoScrollPaused(true);
    const pauseTime = isMobile ? 15000 : 10000; // Более длительная пауза на мобильных
    setTimeout(() => setIsHeroAutoScrollPaused(false), pauseTime);
  };

  const prevHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsHeroAutoScrollPaused(true);
    const pauseTime = isMobile ? 15000 : 10000; // Более длительная пауза на мобильных
    setTimeout(() => setIsHeroAutoScrollPaused(false), pauseTime);
  };

  const goToHeroSlide = (index: number) => {
    setCurrentHeroSlide(index);
    setIsHeroAutoScrollPaused(true);
    const pauseTime = isMobile ? 15000 : 10000; // Более длительная пауза на мобильных
    setTimeout(() => setIsHeroAutoScrollPaused(false), pauseTime);
  };

  // Функции для обработки свайпов
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextHeroSlide();
    }
    if (isRightSwipe) {
      prevHeroSlide();
    }
  };

  return (
    <section className="hero-section" ref={heroRef}>
      {/* Фоновые эффекты */}
      <div className="hero-background">
        <ParticleEffect density={isMobile ? 10 : 20} color="rgba(52, 58, 64, 0.06)" size={isMobile ? 1 : 1.5} />
        <div className="hero-gradient-overlay"></div>
        <div className="hero-animated-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="hero-content">
          <div className="hero-content__left">
            <h1 className="title hero-title-animated">
              <div className="title-logo">
                <div className="title-logo-main">ALATAU</div>
                <div className="title-logo-sub">PACKAGING</div>
              </div>
              <span className="title-line title-accent">{t('hero.subtitle')}</span>
            </h1>
          </div>
          <div className="hero-content__right">
            <p className="description hero-description-animated">
              {t('hero.description')}
            </p>
            <div className="hero-stats">
              <div className="stat-item" data-stat="quality" onClick={() => handleStatClick('quality')}>
                <div className="stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="stat-content">
                  <div className="stat-number" data-value="100">0</div>
                  <div className="stat-label">{t('hero.quality')}</div>
                </div>
                <div className="stat-hover-effect"></div>
              </div>
              <div className="stat-item" data-stat="technologies" onClick={() => handleStatClick('technologies')}>
                <div className="stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7V10C2 16.627 6.373 21 13 21C19.627 21 24 16.627 24 10V7L14 2L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 9L16 11V15L12 17L8 15V11L12 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="stat-content">
                  <div className="stat-number">{t('hero.technologies')}</div>
                  <div className="stat-label"></div>
                </div>
                <div className="stat-hover-effect"></div>
              </div>
              <div className="stat-item" data-stat="partner" onClick={() => handleStatClick('partner')}>
                <div className="stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="stat-content">
                  <div className="stat-number">{t('hero.partner')}</div>
                  <div className="stat-label"></div>
                </div>
                <div className="stat-hover-effect"></div>
              </div>
            </div>
            <div className="button-group hero-buttons-animated">
              <Button variant="primary" onClick={() => navigate('/about')}>{t('hero.cta')}</Button>
              <Button variant="secondary" onClick={() => navigate('/products')}>{t('hero.catalog')}</Button>
              <div className="hero-play-button">

              </div>
            </div>
          </div>
        </div>
        <div 
          className="hero-slider"
          onMouseEnter={() => !isMobile && setIsHeroAutoScrollPaused(true)}
          onMouseLeave={() => !isMobile && setIsHeroAutoScrollPaused(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <button className="slider-arrow slider-arrow-prev" onClick={prevHeroSlide}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="slider-container">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`slider-slide ${index === currentHeroSlide ? 'active' : ''}`}
                style={{
                  transform: `translateX(${(index - currentHeroSlide) * 100}%)`,
                }}
              >
                <img 
                  src={slide.image} 
                  alt={slide.alt}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = fallbackImages[index] || fallbackImages[0];
                  }}
                />
              </div>
            ))}
          </div>
          <button className="slider-arrow slider-arrow-next" onClick={nextHeroSlide}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="slider-dots">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${index === currentHeroSlide ? 'active' : ''}`}
                onClick={() => goToHeroSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;