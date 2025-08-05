import React, { useState, useEffect, useRef } from 'react';
import './MainPage.scss';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ProductionLineDetail from '../../components/ProductionLineDetail/ProductionLineDetail';
import HeroSection from '../../components/Hero/HeroSection';
import PackagingSection from '../../components/PackagingSection/PackagingSection';
import QualitySection from '../../components/QualitySection/QualitySection';
import ProductionSection, { getProductionLines } from '../../components/ProductionSection/ProductionSection';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const MainPage: React.FC = () => {
  const [selectedLine, setSelectedLine] = useState<ReturnType<typeof getProductionLines>[0] | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Refs for animation elements
  const heroRef = useRef<HTMLDivElement>(null);
  const packagingRef = useRef<HTMLDivElement>(null);
  const qualityRef = useRef<HTMLDivElement>(null);
  const productionRef = useRef<HTMLDivElement>(null);

  // Функция для определения мобильного устройства
  const checkMobile = () => {
    const mobile = window.innerWidth <= 768;
    setIsMobile(mobile);
    return mobile;
  };

  useEffect(() => {
    // Проверяем размер экрана при загрузке
    checkMobile();

    // Initial render animation with stagger effect - только для десктопа (исключая hero)
    if (!isMobile) {
      const elements = [packagingRef, qualityRef, productionRef]; // Убрали heroRef
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
    }

    // Setup ScrollTrigger animations after initial render
    const setupScrollAnimations = () => {
      // Hero section text animation - только для десктопа
      // Убрали анимацию hero title, так как она уже есть в HeroSection компоненте
      // if (!isMobile) {
      //   const heroTitle = heroRef.current?.querySelector('.title');
      //   if (heroTitle) {
      //     gsap.from(heroTitle, {
      //       opacity: 0,
      //       y: 50,
      //       duration: 1,
      //       ease: "power2.out",
      //       scrollTrigger: {
      //         trigger: heroRef.current,
      //         start: "top 80%",
      //         end: "top 20%",
      //         toggleActions: "play none none none",
      //         once: true
      //       }
      //     });
      //   }
      // }

      // Packaging section text animation
      const packagingTitle = packagingRef.current?.querySelector('.section-title');
      const packagingDesc = packagingRef.current?.querySelector('.section-description');
      
      if (packagingTitle) {
        gsap.fromTo(packagingTitle,
          { 
            opacity: 0,
            y: isMobile ? 15 : 30
          },
          {
            opacity: 1,
            y: 0,
            duration: isMobile ? 0.3 : 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: packagingRef.current,
              start: isMobile ? "top 80%" : "top 70%",
              end: isMobile ? "top 30%" : "top 20%",
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
            y: isMobile ? 10 : 20
          },
          {
            opacity: 1,
            y: 0,
            duration: isMobile ? 0.25 : 0.8,
            delay: isMobile ? 0.05 : 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: packagingRef.current,
              start: isMobile ? "top 80%" : "top 70%",
              end: isMobile ? "top 30%" : "top 20%",
              toggleActions: "play none none none",
              once: true
            }
          }
        );
      }

      // Quality section text animation - только для десктопа
      if (!isMobile) {
        const qualityTitle = qualityRef.current?.querySelector('.section-title');
        const qualityDesc = qualityRef.current?.querySelector('.section-description');
        
        if (qualityTitle) {
          gsap.from(qualityTitle, {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: qualityRef.current,
              start: "top 65%",
              end: "top 15%",
              toggleActions: "play none none none",
              once: true
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
              toggleActions: "play none none none",
              once: true
            }
          });
        }
      }

      // Production section text animation with enhanced effects
      const productionTitle = productionRef.current?.querySelector('.section-title');
      const productionDesc = productionRef.current?.querySelector('.section-description');
      
      if (productionTitle) {
        gsap.from(productionTitle, {
          opacity: 0,
          y: isMobile ? 20 : 50,
          rotationX: isMobile ? -3 : -15,
          duration: isMobile ? 0.4 : 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: productionRef.current,
            start: isMobile ? "top 80%" : "top 75%",
            end: isMobile ? "top 35%" : "top 25%",
            toggleActions: "play none none none",
            once: true
          }
        });
      }

      if (productionDesc) {
        gsap.from(productionDesc, {
          opacity: 0,
          y: isMobile ? 15 : 30,
          rotationX: isMobile ? -2 : -10,
          duration: isMobile ? 0.3 : 1,
          delay: isMobile ? 0.05 : 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: productionRef.current,
            start: isMobile ? "top 80%" : "top 75%",
            end: isMobile ? "top 35%" : "top 25%",
            toggleActions: "play none none none",
            once: true
          }
        });
      }

      // Enhanced Hero parallax effect with smoother animation (только для десктопа)
      if (!isMobile) {
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
      }

      // Enhanced Packaging section with staggered text animation
      const packagingContent = packagingRef.current?.querySelector('.section-content');
      if (packagingContent) {
        const elements = packagingContent.children;
        gsap.fromTo(elements,
          { 
            opacity: 0,
            y: isMobile ? 15 : 30
          },
          {
            opacity: 1,
            y: 0,
            duration: isMobile ? 0.25 : 0.8,
            stagger: isMobile ? 0.05 : 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: packagingRef.current,
              start: isMobile ? "top 80%" : "top 70%",
              end: isMobile ? "top 30%" : "top 20%",
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
          x: (index) => isMobile ? [30, -30][index] : [100, -100][index],
          opacity: 0,
          rotation: (index) => isMobile ? [1, -1][index] : [5, -5][index],
          duration: isMobile ? 0.4 : 1.2,
          ease: "power2.out",
          stagger: isMobile ? 0.05 : 0.2,
          scrollTrigger: {
            trigger: qualityRef.current,
            start: isMobile ? "top 75%" : "top 65%",
            end: isMobile ? "top 25%" : "top 15%",
            toggleActions: "play none none none",
            once: true
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
            y: isMobile ? 25 : 80,
            rotationX: isMobile ? -5 : -20,
            perspective: 1000
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: isMobile ? 0.4 : 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: productionRef.current,
              start: isMobile ? "top 80%" : "top 70%",
              end: isMobile ? "top 30%" : "top 20%",
              toggleActions: "play none none none",
              once: true
            }
          }
        );
        
        // Then animate each card with a beautiful staggered 3D effect
        gsap.fromTo(cards,
          { 
            opacity: 0,
            y: isMobile ? 20 : 60,
            scale: isMobile ? 0.95 : 0.85,
            rotationY: isMobile ? -3 : -15,
            rotationX: isMobile ? -2 : -10,
            perspective: 1000
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationY: 0,
            rotationX: 0,
            duration: isMobile ? 0.3 : 1,
            stagger: isMobile ? 0.05 : 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: productionRef.current,
              start: isMobile ? "top 80%" : "top 70%",
              end: isMobile ? "top 30%" : "top 20%",
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
    }, isMobile ? 300 : 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isMobile]);

  // Обработчик изменения размера окна
  useEffect(() => {
    const handleResize = () => {
      checkMobile();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle animation setup for each section
  const handleHeroMount = (ref: React.RefObject<HTMLDivElement | null>) => {
    heroRef.current = ref.current;
  };

  const handlePackagingMount = (ref: React.RefObject<HTMLDivElement | null>) => {
    packagingRef.current = ref.current;
  };

  const handleQualityMount = (ref: React.RefObject<HTMLDivElement | null>) => {
    qualityRef.current = ref.current;
  };

  const handleProductionMount = (ref: React.RefObject<HTMLDivElement | null>) => {
    productionRef.current = ref.current;
  };

  return (
    <div className="page-container">
      <Navbar />
      
      <HeroSection onMount={handleHeroMount} />
      
      <PackagingSection onMount={handlePackagingMount} />
      
      <QualitySection onMount={handleQualityMount} />
      
      <ProductionSection 
        onMount={handleProductionMount} 
        onLineSelect={setSelectedLine}
      />
      
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
