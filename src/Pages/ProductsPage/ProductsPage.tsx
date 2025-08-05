import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useLanguage, TranslationKeys } from '../../contexts/LanguageContext';
import './ProductsPage.scss';

gsap.registerPlugin(ScrollTrigger);

// Данные продукции
const productCategories = [
  'products.categories.all',
  'products.categories.food',
  'products.categories.thermoforming',
  'products.categories.shrink',
  'products.categories.vacuum',
  'products.categories.casing',
  'products.categories.barrier'
];

const products = [
  {
    id: 1,
    nameKey: 'products.meat.film.name',
    categoryKey: 'products.categories.food',
    descriptionKey: 'products.meat.film.description',
    thicknessKey: 'products.meat.film.thickness',
    widthKey: 'products.meat.film.width',
    featuresKey: 'products.meat.film.features',
    image: 'https://avatars.mds.yandex.net/get-ydo/6059193/2a000001813957ee508c84143a461aacf824/diploma',
    priceKey: 'products.meat.film.price',
    inStock: true
  },
  {
    id: 2,
    nameKey: 'products.thermoforming.bops.name',
    categoryKey: 'products.categories.thermoforming',
    descriptionKey: 'products.thermoforming.bops.description',
    thicknessKey: 'products.thermoforming.bops.thickness',
    widthKey: 'products.thermoforming.bops.width',
    featuresKey: 'products.thermoforming.bops.features',
    image: 'https://img.diytrade.com/smimg/2297735/43290332-4697374-0/BOPS_sheet_for_sushi_tray/4c0d.jpg',
    priceKey: 'products.thermoforming.bops.price',
    inStock: true
  },
  {
    id: 3,
    nameKey: 'products.shrink.cheese.name',
    categoryKey: 'products.categories.shrink',
    descriptionKey: 'products.shrink.cheese.description',
    thicknessKey: 'products.shrink.cheese.thickness',
    widthKey: 'products.shrink.cheese.width',
    featuresKey: 'products.shrink.cheese.features',
    image: 'https://officelife.media/upload/iblock/96b/96b2a2d2a584e7202ebf38b8e8b05ee0.png',
    priceKey: 'products.shrink.cheese.price',
    inStock: true
  },
  {
    id: 4,
    nameKey: 'products.vacuum.fish.name',
    categoryKey: 'products.categories.vacuum',
    descriptionKey: 'products.vacuum.fish.description',
    thicknessKey: 'products.vacuum.fish.thickness',
    widthKey: 'products.vacuum.fish.width',
    featuresKey: 'products.vacuum.fish.features',
    image: 'https://i.pinimg.com/originals/f2/e4/db/f2e4dbf0b4049fa569c6a5142e31c981.jpg',
    priceKey: 'products.vacuum.fish.price',
    inStock: true
  },
  {
    id: 5,
    nameKey: 'products.casing.pentaflex.name',
    categoryKey: 'products.categories.casing',
    descriptionKey: 'products.casing.pentaflex.description',
    thicknessKey: 'products.casing.pentaflex.thickness',
    widthKey: 'products.casing.pentaflex.width',
    featuresKey: 'products.casing.pentaflex.features',
    image: 'https://arriah.ru/upload/iblock/f95/01q4f0qdoeb4j67vmqbs6fvyk3e6119f.jpg',
    priceKey: 'products.casing.pentaflex.price',
    inStock: true
  },
  {
    id: 6,
    nameKey: 'products.barrier.papevoh.name',
    categoryKey: 'products.categories.barrier',
    descriptionKey: 'products.barrier.papevoh.description',
    thicknessKey: 'products.barrier.papevoh.thickness',
    widthKey: 'products.barrier.papevoh.width',
    featuresKey: 'products.barrier.papevoh.features',
    image: 'https://i.trade-cloud.com.cn/upload/7175/image/20230926/bopp-flexible-packaging-films-1_458320.webp',
    priceKey: 'products.barrier.papevoh.price',
    inStock: true
  },
  {
    id: 7,
    nameKey: 'products.food.bread.name',
    categoryKey: 'products.categories.food',
    descriptionKey: 'products.food.bread.description',
    thicknessKey: 'products.food.bread.thickness',
    widthKey: 'products.food.bread.width',
    featuresKey: 'products.food.bread.features',
    image: 'https://images.deal.by/343674286_w640_h640_plenki-termoformovochnye-myagkie.jpg',
    priceKey: 'products.food.bread.price',
    inStock: true
  },
  {
    id: 8,
    nameKey: 'products.shrink.ops.name',
    categoryKey: 'products.categories.shrink',
    descriptionKey: 'products.shrink.ops.description',
    thicknessKey: 'products.shrink.ops.thickness',
    widthKey: 'products.shrink.ops.width',
    featuresKey: 'products.shrink.ops.features',
    image: 'https://avatars.mds.yandex.net/get-mpic/1597983/img_id1027357122216768002.png/orig',
    priceKey: 'products.shrink.ops.price',
    inStock: false
  },
  {
    id: 9,
    nameKey: 'products.thermoforming.lidding.name',
    categoryKey: 'products.categories.thermoforming',
    descriptionKey: 'products.thermoforming.lidding.description',
    thicknessKey: 'products.thermoforming.lidding.thickness',
    widthKey: 'products.thermoforming.lidding.width',
    featuresKey: 'products.thermoforming.lidding.features',
    image: 'https://stangrad.ru/upload/medialibrary/7f7/949B0D32AA6B6D7BEA8A75B57011D8179A2C42771D97F634A7_pimgpsh_fullsize_distr.jpg',
    priceKey: 'products.thermoforming.lidding.price',
    inStock: true
  }
];

const ProductsPage: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('products.categories.all');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const catalogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Фильтрация продуктов
    let filtered = products;
    
    if (selectedCategory !== 'products.categories.all') {
      filtered = filtered.filter(product => product.categoryKey === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(product => 
        t(product.nameKey as keyof TranslationKeys).toLowerCase().includes(searchTerm.toLowerCase()) ||
        t(product.descriptionKey as keyof TranslationKeys).toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm, t]);

  useEffect(() => {
    // Анимация появления страницы
    const timeline = gsap.timeline();
    
    timeline
      .fromTo('.products-breadcrumb', 
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      )
      .fromTo('.hero-left', 
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }, 
        "-=0.3"
      )
      .fromTo('.hero-right', 
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }, 
        "-=0.6"
      )
      .fromTo('.visual-card', 
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" }, 
        "-=0.4"
      )
      .fromTo('.hero-stats .stat-item', 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }, 
        "-=0.3"
      )
      .fromTo('.search-filter-bar', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, 
        "-=0.4"
      )
      .fromTo('.category-filter .category-btn', 
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" }, 
        "-=0.3"
      );

    // Анимации при скролле
    gsap.fromTo('.product-card', {
      opacity: 0,
      y: 50,
      scale: 0.95
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: '.products-grid',
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

  const handleCategoryChange = (categoryKey: string) => {
    setSelectedCategory(categoryKey);
    
    // Анимация смены категории
    gsap.fromTo('.product-card', 
      { opacity: 1, scale: 1 },
      { 
        opacity: 0, 
        scale: 0.8, 
        duration: 0.3,
        onComplete: () => {
          gsap.fromTo('.product-card', 
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" }
          );
        }
      }
    );
  };

  return (
    <div className="products-page" ref={pageRef}>
      <Navbar />
      
      {/* Products Hero Section */}
      <section className="products-hero-section" ref={heroRef}>
        <div className="products-hero-background">
          <div className="hero-particles"></div>
          <div className="floating-elements">
            <div className="element element-1"></div>
            <div className="element element-2"></div>
            <div className="element element-3"></div>
            <div className="element element-4"></div>
            <div className="element element-5"></div>
          </div>
          <div className="hero-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        
        <div className="content-wrapper">
          <div className="products-breadcrumb">
            <button 
              className="back-button" 
              onClick={() => navigate('/')}
              aria-label="Вернуться на главную страницу"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="back-text">{t('products.breadcrumb.home')}</span>
            </button>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{t('products.breadcrumb.current')}</span>
          </div>
          
          <div className="hero-main-content">
            <div className="hero-left">
              <div className="hero-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <rect x="7" y="8" width="10" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>{t('products.hero.badge')}</span>
              </div>
              
              <h1 className="hero-title">
                {t('products.hero.title')} <br />
                <span className="title-accent">{t('products.hero.title.accent')}</span>
              </h1>
              
              <p className="hero-description">
                {t('products.hero.description')}
              </p>
              
              <div className="hero-features">
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h4>{t('products.hero.feature1.title')}</h4>
                    <p>{t('products.hero.feature1.description')}</p>
                  </div>
                </div>
                
                                 <div className="feature-item">
                   <div className="feature-icon">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                       <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                   </div>
                   <div className="feature-text">
                     <h4>{t('products.hero.feature2.title')}</h4>
                     <p>{t('products.hero.feature2.description')}</p>
                   </div>
                 </div>
                
                <div className="feature-item">
                  <div className="feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="feature-text">
                    <h4>{t('products.hero.feature3.title')}</h4>
                    <p>{t('products.hero.feature3.description')}</p>
                  </div>
                </div>
              </div>
              
              <div className="hero-cta">
                <button className="cta-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15A2 2 0 0 1 19 17H7L3 13V10A2 2 0 0 1 5 8H15L19 12H21A2 2 0 0 1 21 14V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {t('products.hero.cta.catalog')}
                </button>
                <button className="cta-secondary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92V3A2 2 0 0 0 20 1H4A2 2 0 0 0 2 3V16.92A2 2 0 0 0 4.11 19L12 21L19.89 19A2 2 0 0 0 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 7L18 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 11L18 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 15L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {t('products.hero.cta.consultation')}
                </button>
              </div>
            </div>
            
            <div className="hero-right">
              <div className="hero-visual">
                                 <div className="visual-card card-1">
                   <div className="card-icon">
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                       <path d="M3 7L12 2L21 7V17L12 22L3 17V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       <path d="M7 10L12 7L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       <path d="M7 14L12 11L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       <path d="M7 18L12 15L17 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                   </div>
                   <h4>{t('products.hero.visual.card1.title')}</h4>
                   <p>{t('products.hero.visual.card1.description')}</p>
                 </div>
                
                                 <div className="visual-card card-2">
                   <div className="card-icon">
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                       <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                     </svg>
                   </div>
                   <h4>{t('products.hero.visual.card2.title')}</h4>
                   <p>{t('products.hero.visual.card2.description')}</p>
                 </div>
                
                                 <div className="visual-card card-3">
                   <div className="card-icon">
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                       <path d="M21 16V8A2 2 0 0 0 19 6H5A2 2 0 0 0 3 8V16A2 2 0 0 0 5 18H19A2 2 0 0 0 21 16Z" stroke="currentColor" strokeWidth="2"/>
                       <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                       <path d="M7 14H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                       <path d="M11 14H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                       <path d="M15 14H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                       <path d="M7 10L9 12L7 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       <path d="M15 10L17 12L15 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                   </div>
                   <h4>{t('products.hero.visual.card3.title')}</h4>
                   <p>{t('products.hero.visual.card3.description')}</p>
                 </div>
              </div>
              
                             <div className="hero-stats">
                 <div className="stat-item">
                   <div className="stat-number">{products.length}+</div>
                   <div className="stat-label">{t('products.hero.stats.products')}</div>
                 </div>
                 <div className="stat-item">
                   <div className="stat-number">6</div>
                   <div className="stat-label">{t('products.hero.stats.categories')}</div>
                 </div>
                 <div className="stat-item">
                   <div className="stat-number">15-200</div>
                   <div className="stat-label">{t('products.hero.stats.thickness')}</div>
                 </div>
                 <div className="stat-item">
                   <div className="stat-number">600-1400</div>
                   <div className="stat-label">{t('products.hero.stats.width')}</div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Catalog */}
      <section className="products-catalog" ref={catalogRef}>
        {/* Дополнительные декоративные элементы */}
        <div className="catalog-decoration catalog-decoration-1"></div>
        <div className="catalog-decoration catalog-decoration-2"></div>
        <div className="catalog-decoration catalog-decoration-3"></div>
        
        <div className="content-wrapper">
          {/* Search and Filter Bar */}
          <div className="search-filter-bar">
            <div className="search-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                type="text"
                placeholder={t('products.search.placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="filter-info">
              {t('products.search.found')} <span className="count">{filteredProducts.length}</span> {t('products.search.products')}
            </div>
          </div>

          {/* Category Filter */}
          <div className="category-filter">
            {productCategories.map((category, index) => (
              <button
                key={index}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category)}
              >
                {t(category as keyof TranslationKeys)}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {filteredProducts.map((product) => (
                                           <div
                key={product.id}
                className="product-card"
              >
                <div className="product-image">
                  <img src={product.image} alt={t(product.nameKey as keyof TranslationKeys)} />
                </div>
                
                <div className="product-content">
                  <div className="product-category">{t(product.categoryKey as keyof TranslationKeys)}</div>
                  <h3 className="product-name">{t(product.nameKey as keyof TranslationKeys)}</h3>
                  <p className="product-description">{t(product.descriptionKey as keyof TranslationKeys)}</p>
                  
                  <div className="product-specs">
                    <div className="spec-item">
                      <strong>Толщина:</strong> {t(product.thicknessKey as keyof TranslationKeys)}
                    </div>
                    <div className="spec-item">
                      <strong>Ширина:</strong> {t(product.widthKey as keyof TranslationKeys)}
                    </div>
                  </div>
                  
                  <div className="product-features">
                    {t(product.featuresKey as keyof TranslationKeys).split(', ').map((feature, index) => (
                      <span key={index} className="feature-tag">{feature.trim()}</span>
                    ))}
                  </div>
                  
                  <div className="product-footer">
                    <div className="product-price">{t(product.priceKey as keyof TranslationKeys)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="no-products">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 16L12 12L8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 16L12 12L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h3>{t('products.noResults.title')}</h3>
              <p>{t('products.noResults.description')}</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;