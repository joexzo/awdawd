import React, { useState, useEffect, useRef } from 'react';
import './MainPage.scss';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import ProductionLineDetail from '../../components/ProductionLineDetail/ProductionLineDetail';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

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

const productionLines = [
  {
    title: 'Линия Windmoller & Holsher',
    description: 'Производим гибкие пленки для термоформования. Наша линия Windmoller & Holsher обеспечивает высокое качество и точность при производстве различных типов упаковочных пленок.',
    image: 'https://media.licdn.com/dms/image/v2/C4E0BAQGTGNVxvTmcjg/company-logo_200_200/company-logo_200_200/0/1632819028035/windmoeller__hoelscher_group_logo?e=2147483647&v=beta&t=kmDI8_m0O8xfQhjhnO68jjb_C7qMDNG5w2o2i0maqMw',
    equipmentImage: 'https://www.wh.group/media/products/extrusion/filmex/16_filmex_extruder_3840x2880_r_8_5_res_586x371.jpg',
    link: 'https://www.wh.group/en/extrusion/',
    specifications: [
      'Ширина пленки: до 2000 мм',
      'Толщина пленки: 20-200 мкм',
      'Производительность: до 1000 кг/час',
      'Многослойная структура: до 7 слоев'
    ]
  },
  {
    title: 'Линия Kuhne',
    description: 'Изготавливаем термоусадочные пленки для различных применений. Линия Kuhne позволяет производить высококачественные пленки с отличными усадочными характеристиками.',
    image: 'https://www.kuhne-group.com/typo3conf/ext/if_sitepackage_kunde/Resources/Public/Images/logo.svg',
    equipmentImage: 'https://www.kuhne-group.com/fileadmin/_processed_/7/5/csm_180405_Kuhne__AHC4335_mod_2f76df90ef.webp',
    link: 'https://www.kuhne-group.com/',
    specifications: [
      'Ширина пленки: до 1600 мм',
      'Толщина пленки: 15-150 мкм',
      'Производительность: до 800 кг/час',
      'Процент усадки: до 70%'
    ]
  },
  {
    title: 'Линия Comexi',
    description: 'Предлагаем инновационные решения с печатью на пленках. Линия Comexi обеспечивает высококачественную флексографическую печать на различных типах пленок.',
    image: 'https://yt3.googleusercontent.com/ytc/AIdro_kWvMQijfAozZV2A8ox-aYVLoI0zwHNkzvp01RLOUpxHg=s900-c-k-c0x00ffffff-no-rj',
    equipmentImage: 'https://www.flexotechmag.com/wp-content/uploads/Comexi-F2-MB-scaled.jpg',
    link: 'https://www.comexi.com/',
    specifications: [
      'Ширина печати: до 1500 мм',
      'Скорость печати: до 500 м/мин',
      'Количество красок: до 8 цветов',
      'Разрешение печати: до 175 lpi'
    ]
  }
];

const heroSlides = [
  {
    image: 'https://happylove.top/uploads/posts/2023-06/1687385591_happylove-top-p-kazakhstan-kartinki-krasivo-59.jpg',
    alt: 'EXPO Astana Sphere View 1'
  },
  {
    image: 'https://www.neumannmueller.com/fileadmin/content/seitenbaum/wir/News/2017/EXPO_Astana_2017/The_Sphere_Header.jpg',
    alt: 'EXPO Astana Sphere View 2'
  },
  {
    image: 'https://avatars.mds.yandex.net/i?id=2c6dae8c4afeb1f3dd3d43cb07688ce7_l-2480692-images-thumbs&n=13',
    alt: 'Kazakhstan landscape'
  }


];

const MainPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedLine, setSelectedLine] = useState<typeof productionLines[0] | null>(null);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [isHeroAutoScrollPaused, setIsHeroAutoScrollPaused] = useState(false);

  // Refs for animation elements
  const heroRef = useRef<HTMLDivElement>(null);
  const packagingRef = useRef<HTMLDivElement>(null);
  const qualityRef = useRef<HTMLDivElement>(null);
  const productionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial render animation with stagger effect
    const elements = [heroRef, packagingRef, qualityRef, productionRef];
    elements.forEach((ref, index) => {
      if (ref.current) {
        gsap.fromTo(ref.current,
          { 
            opacity: 0,
            y: 50,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            delay: index * 0.2,
            ease: "power3.out"
          }
        );
      }
    });

    // Setup ScrollTrigger animations after initial render
    const setupScrollAnimations = () => {
      // Hero section text animation
      const heroTitle = heroRef.current?.querySelector('.title');
      if (heroTitle) {
        gsap.from(heroTitle, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
          }
        });
      }

      // Packaging section text animation
      const packagingTitle = packagingRef.current?.querySelector('.section-title');
      const packagingDesc = packagingRef.current?.querySelector('.section-description');
      
      if (packagingTitle) {
        gsap.fromTo(packagingTitle,
          { 
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: packagingRef.current,
              start: "top 70%",
              end: "top 20%",
              toggleActions: "play none none none",
              once: true
            }
          }
        );
      }

      if (packagingDesc) {
        gsap.fromTo(packagingDesc,
          { 
            opacity: 0,
            y: 20
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: packagingRef.current,
              start: "top 70%",
              end: "top 20%",
              toggleActions: "play none none none",
              once: true
            }
          }
        );
      }

      // Quality section text animation
      const qualityTitle = qualityRef.current?.querySelector('.section-title');
      const qualityDesc = qualityRef.current?.querySelector('.section-description');
      
      if (qualityTitle) {
        gsap.from(qualityTitle, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: qualityRef.current,
            start: "top 65%",
            end: "top 15%",
            toggleActions: "play none none reverse"
          }
        });
      }

      if (qualityDesc) {
        gsap.from(qualityDesc, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: qualityRef.current,
            start: "top 65%",
            end: "top 15%",
            toggleActions: "play none none reverse"
          }
        });
      }

      // Production section text animation with enhanced effects
      const productionTitle = productionRef.current?.querySelector('.section-title');
      const productionDesc = productionRef.current?.querySelector('.section-description');
      
      if (productionTitle) {
        gsap.from(productionTitle, {
          opacity: 0,
          y: 50,
          rotationX: -15,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: productionRef.current,
            start: "top 75%",
            end: "top 25%",
            toggleActions: "play none none reverse"
          }
        });
      }

      if (productionDesc) {
        gsap.from(productionDesc, {
          opacity: 0,
          y: 30,
          rotationX: -10,
          duration: 1,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: productionRef.current,
            start: "top 75%",
            end: "top 25%",
            toggleActions: "play none none reverse"
          }
        });
      }

      // Enhanced Hero parallax effect with smoother animation
      const heroContent = heroRef.current?.querySelector('.hero-content');
      const heroSlider = heroRef.current?.querySelector('.hero-slider');
      
      if (heroContent && heroSlider) {
        gsap.to([heroContent, heroSlider], {
          yPercent: -20,
          scale: 1.05,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
            pinSpacing: false,
            toggleActions: "play none none reverse"
          }
        });
      }

      // Enhanced Packaging section with staggered text animation
      const packagingContent = packagingRef.current?.querySelector('.section-content');
      if (packagingContent) {
        const elements = packagingContent.children;
        gsap.fromTo(elements,
          { 
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: packagingRef.current,
              start: "top 70%",
              end: "top 20%",
              toggleActions: "play none none none",
              once: true
            }
          }
        );
      }

      // Quality section - enhanced split animation with smoother transitions
      const qualityContent = qualityRef.current?.querySelector('.content-left');
      const qualitySlider = qualityRef.current?.querySelector('.content-right');
      
      if (qualityContent && qualitySlider) {
        gsap.from([qualityContent, qualitySlider], {
          x: (index) => [100, -100][index],
          opacity: 0,
          rotation: (index) => [5, -5][index],
          duration: 1.2,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: qualityRef.current,
            start: "top 65%",
            end: "top 15%",
            toggleActions: "play none none reverse",
            scrub: false
          }
        });
      }

      // Production lines grid animation with enhanced 3D effects and beautiful transformations
      const productionGrid = productionRef.current?.querySelector('.production-lines__grid');
      const cards = productionRef.current?.querySelectorAll('.production-line-card');
      
      if (productionGrid && cards) {
        // First animate the grid container with a 3D effect
        gsap.fromTo(productionGrid,
          { 
            opacity: 0,
            y: 80,
            rotationX: -20,
            perspective: 1000
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: productionRef.current,
              start: "top 70%",
              end: "top 20%",
              toggleActions: "play none none none",
              once: true
            }
          }
        );
        
        // Then animate each card with a beautiful staggered 3D effect
        gsap.fromTo(cards,
          { 
            opacity: 0,
            y: 60,
            scale: 0.85,
            rotationY: -15,
            rotationX: -10,
            perspective: 1000
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationY: 0,
            rotationX: 0,
            duration: 1,
            stagger: 0.12,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: productionRef.current,
              start: "top 70%",
              end: "top 20%",
              toggleActions: "play none none none",
              once: true
            }
          }
        );
      }
    };

    // Delay ScrollTrigger setup to ensure content is rendered
    const timer = setTimeout(() => {
      setupScrollAnimations();
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

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

  useEffect(() => {
    let timer: number;
    
    if (!isHeroAutoScrollPaused) {
      timer = window.setInterval(() => {
        setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
      }, 5000);
    }

    return () => {
      if (timer) window.clearInterval(timer);
    };
  }, [isHeroAutoScrollPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % equipmentSlides.length);
    setIsAutoScrollPaused(true);
    setTimeout(() => setIsAutoScrollPaused(false), 10000); // Resume auto-scroll after 10 seconds
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + equipmentSlides.length) % equipmentSlides.length);
    setIsAutoScrollPaused(true);
    setTimeout(() => setIsAutoScrollPaused(false), 10000); // Resume auto-scroll after 10 seconds
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoScrollPaused(true);
    setTimeout(() => setIsAutoScrollPaused(false), 10000); // Resume auto-scroll after 10 seconds
  };

  const nextHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    setIsHeroAutoScrollPaused(true);
    setTimeout(() => setIsHeroAutoScrollPaused(false), 10000);
  };

  const prevHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsHeroAutoScrollPaused(true);
    setTimeout(() => setIsHeroAutoScrollPaused(false), 10000);
  };

  const goToHeroSlide = (index: number) => {
    setCurrentHeroSlide(index);
    setIsHeroAutoScrollPaused(true);
    setTimeout(() => setIsHeroAutoScrollPaused(false), 10000);
  };

  return (
    <div className="page-container">
      <Navbar />
      <section className="hero-section" ref={heroRef}>
        <div className="content-wrapper">
          <div className="hero-content">
            <div className="hero-content__left">
              <h1 className="title">
                Alatau Packaging - <br />
                Ваш надежный <br />
                партнер в упаковке
              </h1>
            </div>
            <div className="hero-content__right">
              <p className="description">
                Мы предлагаем современные полимерные барьерные пленки для
                упаковки, обеспечивая высокое качество и надежность. Наши
                технологии позволяют решать любые задачи в области упаковки,
                удовлетворяя потребности клиентов.
              </p>
              <div className="button-group">
                <Button variant="primary">Узнать больше</Button>
                <Button variant="secondary">Связаться</Button>
              </div>
            </div>
          </div>
          <div 
            className="hero-slider"
            onMouseEnter={() => setIsHeroAutoScrollPaused(true)}
            onMouseLeave={() => setIsHeroAutoScrollPaused(false)}
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
                  <img src={slide.image} alt={slide.alt} />
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

      <section className="packaging-section" ref={packagingRef}>
        <div className="content-wrapper">
          <div className="section-label">Упаковка</div>
          <div className="section-content">
            <h2 className="section-title">
              Инновации в производстве <br />
              упаковочных пленок
            </h2>
            <p className="section-description">
              ТОО «Alatau Packaging» - это молодая и динамично развивающаяся компания,
              специализирующаяся на производстве полимерных барьерных пленок. Мы предлагаем
              современные решения для упаковки, отвечающие самым высоким стандартам качества.
            </p>
            <div className="button-group">
              <Button variant="outline">Узнать</Button>
              <Button 
                variant="text" 
                icon={
                  <svg className="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
                  </svg>
                }
              >
                Подробнее
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="quality-section" ref={qualityRef}>
        <div className="content-wrapper">
          <div className="section-content">
            <div className="content-left">
              <div className="section-label">Качество</div>
              <h2 className="section-title">
                Современное <br />
                оборудование для <br />
                вашего бизнеса
              </h2>
              <p className="section-description">
                Наше производство оснащено передовыми технологиями от мировых
                лидеров. Мы гарантируем высокое качество и надежность каждой
                пленки.
              </p>
              <div className="button-group">
                <Button variant="outline">Узнать</Button>
                <Button 
                  variant="text"
                  icon={
                    <svg className="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
                    </svg>
                  }
                >
                  Подробнее
                </Button>
              </div>
            </div>
            <div className="content-right">
              <div 
                className="custom-slider"
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

      <section className="production-lines" ref={productionRef}>
        <div className="content-wrapper">
          <div className="section-label">Производство</div>
          <h2 className="section-title">
            Наши линии производства <br />
            упаковочных пленок
          </h2>
          <p className="section-description">
            Мы предлагаем широкий ассортимент пленок для упаковки, включая термоусадочные и
            барьерные пленки. Каждая линия производства отвечает самым высоким стандартам
            качества.
          </p>
          
          <div className="production-lines__grid">
            {productionLines && productionLines.length > 0 ? (
              productionLines.map((line, index) => (
                <div 
                  key={index} 
                  className="production-line-card"
                  onClick={() => setSelectedLine(line)}
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
              <div>Нет доступных линий производства</div>
            )}
          </div>

          <div className="button-group">
            <Button variant="outline">Узнать больше</Button>
            <Button 
              variant="text"
              icon={
                <svg className="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
                </svg>
              }
            >
              Смотреть все
            </Button>
          </div>
        </div>
      </section>
      
      {selectedLine && (
        <ProductionLineDetail
          {...selectedLine}
          onClose={() => setSelectedLine(null)}
        />
      )}
      
      <Footer />
    </div>
  );
};

export default MainPage;
