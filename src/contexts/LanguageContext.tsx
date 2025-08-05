import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'RU' | 'KZ' | 'EN';

// Define the structure of translation keys
export type TranslationKeys = {
  // Navigation
  'nav.home': string;
  'nav.about': string;
  'nav.products': string;
  'nav.contacts': string;
  'nav.language': string;
  
  // Home page
  'hero.title': string;
  'hero.subtitle': string;
  'hero.description': string;
  'hero.cta': string;
  'hero.catalog': string;
  'hero.quality': string;
  'hero.technologies': string;
  'hero.partner': string;
  
  // About
  'about.title': string;
  'about.description': string;
  'about.mission': string;
  'about.values': string;
  'about.quality': string;
  'about.innovation': string;
  'about.sustainability': string;
  
  // Products
  'products.title': string;
  'products.subtitle': string;
  'products.cardboard': string;
  'products.plastic': string;
  'products.flexible': string;
  'products.custom': string;
  
  // Contacts
  'contacts.title': string;
  'contacts.address': string;
  'contacts.phone': string;
  'contacts.email': string;
  'contacts.workHours': string;
  'contacts.monday': string;
  'contacts.saturday': string;
  'contacts.sunday': string;
  'contacts.closed': string;
  
  // Common
  'common.learnMore': string;
  'common.viewMore': string;
  'common.readMore': string;
  'common.backToTop': string;
  
  // Main page sections
  'packaging.label': string;
  'packaging.title': string;
  'packaging.description': string;
  
  'quality.label': string;
  'quality.title': string;
  'quality.description': string;
  
  'production.label': string;
  'production.title': string;
  'production.description': string;
  'production.noLines': string;
  
  // Production lines
  'production.windmoller.title': string;
  'production.windmoller.description': string;
  'production.windmoller.spec1': string;
  'production.windmoller.spec2': string;
  'production.windmoller.spec3': string;
  'production.windmoller.spec4': string;
  
  'production.kuhne.title': string;
  'production.kuhne.description': string;
  'production.kuhne.spec1': string;
  'production.kuhne.spec2': string;
  'production.kuhne.spec3': string;
  'production.kuhne.spec4': string;
  
  'production.comexi.title': string;
  'production.comexi.description': string;
  'production.comexi.spec1': string;
  'production.comexi.spec2': string;
  'production.comexi.spec3': string;
  'production.comexi.spec4': string;
  
  // Modal window details
  'modal.visitWebsite': string;
  'modal.close': string;
  'modal.closeModal': string;
  
  // Footer
  'footer.newsletter.text': string;
  'footer.newsletter.placeholder': string;
  'footer.newsletter.subscribe': string;
  'footer.newsletter.disclaimer': string;
  'footer.newsletter.privacy': string;
  'footer.column1.title': string;
  'footer.column2.title': string;
  'footer.followUs': string;
  'footer.copyright': string;
  'footer.privacy': string;
  'footer.terms': string;
  'footer.cookies': string;
  
  // Social media
  'social.facebook': string;
  'social.instagram': string;
  'social.twitter': string;
  'social.linkedin': string;
  'social.youtube': string;
  
  // Footer links
  'footer.link1': string;
  'footer.link2': string;
  'footer.link3': string;
  'footer.link4': string;
  'footer.link5': string;
  'footer.link6': string;
  'footer.link7': string;
  'footer.link8': string;
  'footer.link9': string;
  'footer.link10': string;
  
  // About page
  'about.page.title': string;
  'about.page.description': string;
  'about.breadcrumb.home': string;
  'about.breadcrumb.current': string;
  'about.highlight.modern': string;
  'about.highlight.innovative': string;
  'about.highlight.quality': string;
  'about.mission.title': string;
  'about.mission.description': string;
  'about.mission.founded': string;
  'about.mission.innovation': string;
  'about.location.title': string;
  'about.location.description': string;
  'about.location.address': string;
  'about.location.address.value': string;
  'about.location.production': string;
  'about.location.production.value': string;
  'about.location.research': string;
  'about.location.research.value': string;
  'about.process.title': string;
  'about.process.description': string;
  'about.process.step1.title': string;
  'about.process.step1.description': string;
  'about.process.step2.title': string;
  'about.process.step2.description': string;
  'about.process.step3.title': string;
  'about.process.step3.description': string;
  'about.process.step4.title': string;
  'about.process.step4.description': string;
  'about.process.step5.title': string;
  'about.process.step5.description': string;
  'about.tech.title': string;
  'about.tech.equipment.title': string;
  'about.tech.equipment.description': string;
  'about.tech.automation.title': string;
  'about.tech.automation.description': string;
  'about.tech.quality.title': string;
  'about.tech.quality.description': string;
  'about.standards.title': string;
  'about.standards.food': string;
  'about.standards.eco': string;
  'about.standards.international': string;
  'about.environment.title': string;
  'about.environment.waste': string;
  'about.environment.emissions': string;
  'about.environment.materials': string;
  'about.achievements.title': string;
  'about.achievements.description': string;
  'about.achievements.founded': string;
  'about.achievements.founded.description': string;
  'about.achievements.employees': string;
  'about.achievements.employees.description': string;
  'about.achievements.quality': string;
  'about.achievements.quality.description': string;
  'about.achievements.products': string;
  'about.achievements.products.description': string;
  'about.equipment.title': string;
  'about.equipment.description': string;
  'about.equipment.extrusion.title': string;
  'about.equipment.extrusion.description': string;
  'about.equipment.extrusion.spec': string;
  'about.equipment.printing.title': string;
  'about.equipment.printing.description': string;
  'about.equipment.printing.spec': string;
  'about.equipment.laminating.title': string;
  'about.equipment.laminating.description': string;
  'about.equipment.laminating.spec': string;
  'about.equipment.packaging.title': string;
  'about.equipment.packaging.description': string;
  'about.equipment.packaging.spec': string;
  'about.equipment.laboratory.title': string;
  'about.equipment.laboratory.description': string;
  'about.equipment.laboratory.spec': string;
  'about.equipment.recycling.title': string;
  'about.equipment.recycling.description': string;
  'about.equipment.recycling.spec': string;
  'about.values.title': string;
  'about.values.description': string;
  'about.values.quality.title': string;
  'about.values.quality.description': string;
  'about.values.innovation.title': string;
  'about.values.innovation.description': string;
  'about.values.ecology.title': string;
  'about.values.ecology.description': string;
  'about.values.partnership.title': string;
  'about.values.partnership.description': string;
  'about.values.efficiency.title': string;
  'about.values.efficiency.description': string;
  'about.values.leadership.title': string;
  'about.values.leadership.description': string;
  
  // Contacts page
  'contacts.page.title': string;
  'contacts.page.description': string;
  'contacts.breadcrumb.home': string;
  'contacts.breadcrumb.current': string;
  'contacts.phone.title': string;
  'contacts.phone.value': string;
  'contacts.phone.hours': string;
  'contacts.email.title': string;
  'contacts.email.value': string;
  'contacts.email.response': string;
  'contacts.address.title': string;
  'contacts.address.value': string;
  'contacts.address.description': string;
  'contacts.location.title': string;
  'contacts.location.city': string;
  'contacts.location.city.value': string;
  'contacts.location.district': string;
  'contacts.location.district.value': string;
  'contacts.location.address': string;
  'contacts.location.address.value': string;
  'contacts.location.status': string;
  'contacts.info.title': string;
  'contacts.info.description': string;
  'contacts.info.name.title': string;
  'contacts.info.name.ru': string;
  'contacts.info.name.ru.value': string;
  'contacts.info.name.kz': string;
  'contacts.info.name.kz.value': string;
  'contacts.info.director.title': string;
  'contacts.info.director.name': string;
  'contacts.info.director.position': string;
  'contacts.info.bin.title': string;
  'contacts.info.bin.value': string;
  'contacts.info.bin.description': string;
  'contacts.info.date.title': string;
  'contacts.info.date.value': string;
  'contacts.info.date.description': string;
  'contacts.info.oked.title': string;
  'contacts.info.oked.value': string;
  'contacts.info.oked.description': string;
  'contacts.info.krp.title': string;
  'contacts.info.krp.value': string;
  'contacts.info.krp.description': string;
  'contacts.map.title': string;
  'contacts.map.description': string;
  'contacts.map.address.title': string;
  'contacts.map.address.value': string;
  'contacts.map.hours.title': string;
  'contacts.map.hours.value': string;
  'contacts.map.transport.title': string;
  'contacts.map.transport.value': string;
  
  // Products page
  'products.page.title': string;
  'products.page.description': string;
  'products.breadcrumb.home': string;
  'products.breadcrumb.current': string;
  'products.hero.badge': string;
  'products.hero.title': string;
  'products.hero.title.accent': string;
  'products.hero.description': string;
  'products.hero.feature1.title': string;
  'products.hero.feature1.description': string;
  'products.hero.feature2.title': string;
  'products.hero.feature2.description': string;
  'products.hero.feature3.title': string;
  'products.hero.feature3.description': string;
  'products.hero.cta.catalog': string;
  'products.hero.cta.consultation': string;
  'products.hero.visual.card1.title': string;
  'products.hero.visual.card1.description': string;
  'products.hero.visual.card2.title': string;
  'products.hero.visual.card2.description': string;
  'products.hero.visual.card3.title': string;
  'products.hero.visual.card3.description': string;
  'products.hero.stats.products': string;
  'products.hero.stats.categories': string;
  'products.hero.stats.thickness': string;
  'products.hero.stats.width': string;
  'products.search.placeholder': string;
  'products.search.found': string;
  'products.search.products': string;
  'products.categories.all': string;
  'products.categories.food': string;
  'products.categories.thermoforming': string;
  'products.categories.shrink': string;
  'products.categories.vacuum': string;
  'products.categories.casing': string;
  'products.categories.barrier': string;
  'products.noResults.title': string;
  'products.noResults.description': string;
  'products.contact.button': string;
  
  // Product details
  'products.meat.film.name': string;
  'products.meat.film.description': string;
  'products.meat.film.thickness': string;
  'products.meat.film.width': string;
  'products.meat.film.features': string;
  'products.meat.film.price': string;
  
  'products.thermoforming.bops.name': string;
  'products.thermoforming.bops.description': string;
  'products.thermoforming.bops.thickness': string;
  'products.thermoforming.bops.width': string;
  'products.thermoforming.bops.features': string;
  'products.thermoforming.bops.price': string;
  
  'products.shrink.cheese.name': string;
  'products.shrink.cheese.description': string;
  'products.shrink.cheese.thickness': string;
  'products.shrink.cheese.width': string;
  'products.shrink.cheese.features': string;
  'products.shrink.cheese.price': string;
  
  'products.vacuum.fish.name': string;
  'products.vacuum.fish.description': string;
  'products.vacuum.fish.thickness': string;
  'products.vacuum.fish.width': string;
  'products.vacuum.fish.features': string;
  'products.vacuum.fish.price': string;
  
  'products.casing.pentaflex.name': string;
  'products.casing.pentaflex.description': string;
  'products.casing.pentaflex.thickness': string;
  'products.casing.pentaflex.width': string;
  'products.casing.pentaflex.features': string;
  'products.casing.pentaflex.price': string;
  
  'products.barrier.papevoh.name': string;
  'products.barrier.papevoh.description': string;
  'products.barrier.papevoh.thickness': string;
  'products.barrier.papevoh.width': string;
  'products.barrier.papevoh.features': string;
  'products.barrier.papevoh.price': string;
  
  'products.food.bread.name': string;
  'products.food.bread.description': string;
  'products.food.bread.thickness': string;
  'products.food.bread.width': string;
  'products.food.bread.features': string;
  'products.food.bread.price': string;
  
  'products.shrink.ops.name': string;
  'products.shrink.ops.description': string;
  'products.shrink.ops.thickness': string;
  'products.shrink.ops.width': string;
  'products.shrink.ops.features': string;
  'products.shrink.ops.price': string;
  
  'products.thermoforming.lidding.name': string;
  'products.thermoforming.lidding.description': string;
  'products.thermoforming.lidding.thickness': string;
  'products.thermoforming.lidding.width': string;
  'products.thermoforming.lidding.features': string;
  'products.thermoforming.lidding.price': string;
};

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof TranslationKeys) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Переводы
const translations: Record<Language, TranslationKeys> = {
  RU: {
    'nav.home': 'Главная страница',
    'nav.about': 'О компании',
    'nav.products': 'Продукция',
    'nav.contacts': 'Контакты',
    'nav.language': 'Язык',
    
    // Главная страница
    'hero.title': 'ALATAU PACKAGING',
    'hero.subtitle': 'Ваш надежный партнер в упаковке',
    'hero.description': 'Мы предлагаем современные полимерные барьерные пленки для упаковки, обеспечивая высокое качество и надежность. Наши технологии позволяют решать любые задачи в области упаковки, удовлетворяя потребности клиентов.',
    'hero.cta': 'Узнать больше',
    'hero.catalog': 'Каталог продукции',
    'hero.quality': '100% Качество продукции',
    'hero.technologies': 'Современные Технологии',
    'hero.partner': 'Надежный Партнер',
    
    // О компании
    'about.title': 'О компании',
    'about.description': 'Компания ALATAU PACKAGING является ведущим производителем упаковочных решений в Казахстане',
    'about.mission': 'Наша миссия - предоставлять инновационные и экологически безопасные упаковочные решения',
    'about.values': 'Наши ценности',
    'about.quality': 'Качество',
    'about.innovation': 'Инновации',
    'about.sustainability': 'Устойчивое развитие',
    
    // Продукция
    'products.title': 'Наша продукция',
    'products.subtitle': 'Широкий ассортимент упаковочных решений',
    'products.cardboard': 'Картонная упаковка',
    'products.plastic': 'Пластиковая упаковка',
    'products.flexible': 'Гибкая упаковка',
    'products.custom': 'Индивидуальная упаковка',
    
    // Контакты
    'contacts.title': 'Свяжитесь с нами',
    'contacts.address': 'Адрес',
    'contacts.phone': 'Телефон',
    'contacts.email': 'Email',
    'contacts.workHours': 'Рабочие часы',
    'contacts.monday': 'Понедельник - Пятница',
    'contacts.saturday': 'Суббота',
    'contacts.sunday': 'Воскресенье',
    'contacts.closed': 'Закрыто',
    
    // Общие
    'common.learnMore': 'Узнать больше',
    'common.viewMore': 'Смотреть больше',
    'common.readMore': 'Читать далее',
    'common.backToTop': 'Наверх',
    
    // Секции главной страницы
    'packaging.label': 'Упаковка',
    'packaging.title': 'Инновации в производстве упаковочных пленок',
    'packaging.description': 'ТОО «Alatau Packaging» - это молодая и динамично развивающаяся компания, специализирующаяся на производстве полимерных барьерных пленок. Мы предлагаем современные решения для упаковки, отвечающие самым высоким стандартам качества.',
    
    'quality.label': 'Качество',
    'quality.title': 'Современное оборудование для вашего бизнеса',
    'quality.description': 'Наше производство оснащено передовыми технологиями от мировых лидеров. Мы гарантируем высокое качество и надежность каждой пленки.',
    
    'production.label': 'Производство',
    'production.title': 'Наши линии производства упаковочных пленок',
    'production.description': 'Мы предлагаем широкий ассортимент пленок для упаковки, включая термоусадочные и барьерные пленки. Каждая линия производства отвечает самым высоким стандартам качества.',
    'production.noLines': 'Нет доступных линий производства',
    
    // Линии производства
    'production.windmoller.title': 'Линия Windmoller & Holsher',
    'production.windmoller.description': 'Производим гибкие пленки для термоформования. Наша линия Windmoller & Holsher обеспечивает высокое качество и точность при производстве различных типов упаковочных пленок.',
    'production.windmoller.spec1': 'Ширина пленки: до 2000 мм',
    'production.windmoller.spec2': 'Толщина пленки: 20-200 мкм',
    'production.windmoller.spec3': 'Производительность: до 1000 кг/час',
    'production.windmoller.spec4': 'Многослойная структура: до 7 слоев',
    
    'production.kuhne.title': 'Линия Kuhne',
    'production.kuhne.description': 'Изготавливаем термоусадочные пленки для различных применений. Линия Kuhne позволяет производить высококачественные пленки с отличными усадочными характеристиками.',
    'production.kuhne.spec1': 'Ширина пленки: до 1600 мм',
    'production.kuhne.spec2': 'Толщина пленки: 15-150 мкм',
    'production.kuhne.spec3': 'Производительность: до 800 кг/час',
    'production.kuhne.spec4': 'Процент усадки: до 70%',
    
    'production.comexi.title': 'Линия Comexi',
    'production.comexi.description': 'Предлагаем инновационные решения с печатью на пленках. Линия Comexi обеспечивает высококачественную флексографическую печать на различных типах пленок.',
    'production.comexi.spec1': 'Ширина печати: до 1500 мм',
    'production.comexi.spec2': 'Скорость печати: до 500 м/мин',
    'production.comexi.spec3': 'Количество красок: до 8 цветов',
    'production.comexi.spec4': 'Разрешение печати: до 175 lpi',
    
    // Модальное окно деталей
    'modal.visitWebsite': 'Посетить сайт производителя',
    'modal.close': 'Закрыть',
    'modal.closeModal': 'Закрыть модальное окно',
    
    // Футер
    'footer.newsletter.text': 'Подписывайтесь на нашу рассылку, чтобы быть в курсе новинок и обновлений.',
    'footer.newsletter.placeholder': 'Введите ваш email',
    'footer.newsletter.subscribe': 'Подписаться',
    'footer.newsletter.disclaimer': 'Подписываясь, вы соглашаетесь с нашей Политикой конфиденциальности и даете согласие на получение обновлений.',
    'footer.newsletter.privacy': 'Политикой конфиденциальности',
    'footer.column1.title': 'Столбец Один',
    'footer.column2.title': 'Столбец Два',
    'footer.followUs': 'Следите за нами',
    'footer.copyright': '© 2025 Alatau Packaging. Все права защищены.',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия обслуживания',
    'footer.cookies': 'Настройки cookies',
    
    // Социальные сети
    'social.facebook': 'Facebook',
    'social.instagram': 'Instagram',
    'social.twitter': 'X',
    'social.linkedin': 'LinkedIn',
    'social.youtube': 'Youtube',
    
    // Ссылки футера
    'footer.link1': 'Ссылка Один',
    'footer.link2': 'Ссылка Два',
    'footer.link3': 'Ссылка Три',
    'footer.link4': 'Ссылка Четыре',
    'footer.link5': 'Ссылка Пять',
    'footer.link6': 'Ссылка Шесть',
    'footer.link7': 'Ссылка Семь',
    'footer.link8': 'Ссылка Восемь',
    'footer.link9': 'Ссылка Девять',
    'footer.link10': 'Ссылка Десять',
    
    // Страница "О нас"
    'about.page.title': 'О нашей компании',
    'about.page.description': 'Мы — ведущий производитель полимерных барьерных пленок в Казахстане. Наша миссия заключается в обеспечении высококачественными упаковочными решениями, которые сохраняют свежесть продуктов и соответствуют международным стандартам безопасности.',
    'about.breadcrumb.home': 'Главная',
    'about.breadcrumb.current': 'О компании',
    'about.highlight.modern': 'Современное производство с новейшим оборудованием',
    'about.highlight.innovative': 'Инновационные решения для упаковки',
    'about.highlight.quality': 'Высокие стандарты качества продукции',
    'about.mission.title': 'Наша миссия',
    'about.mission.description': 'Создавать инновационные упаковочные решения, которые защищают продукты и окружающую среду',
    'about.mission.founded': 'Год основания',
    'about.mission.innovation': 'Инновации',
    'about.location.title': 'Наше местоположение',
    'about.location.description': 'Современное производство в сердце Казахстана',
    'about.location.address': 'Адрес',
    'about.location.address.value': 'г. Астана, р-н Есиль, Проспект Мангилик Ел, д. 36, Н.п. 78',
    'about.location.production': 'Производство',
    'about.location.production.value': 'Площадь: 15,000 м², Мощность: 50,000 тонн/год',
    'about.location.research': 'Исследования и разработки',
    'about.location.research.value': 'Собственная лаборатория, Разработка новых материалов',
    'about.process.title': 'Наш процесс производства',
    'about.process.description': 'Современные технологии и строгий контроль на каждом этапе',
    'about.process.step1.title': 'Подготовка сырья',
    'about.process.step1.description': 'Тщательный отбор и подготовка полимерных гранул для производства высококачественных пленок',
    'about.process.step2.title': 'Экструзия',
    'about.process.step2.description': 'Процесс плавления и формования полимеров в тонкие пленки на современном оборудовании',
    'about.process.step3.title': 'Ламинирование',
    'about.process.step3.description': 'Создание многослойных барьерных структур для различных типов упаковки',
    'about.process.step4.title': 'Печать и отделка',
    'about.process.step4.description': 'Нанесение печати и дополнительная обработка поверхности пленок',
    'about.process.step5.title': 'Контроль качества',
    'about.process.step5.description': 'Лабораторные испытания и проверка всех параметров готовой продукции',
    'about.tech.title': 'Технологические преимущества',
    'about.tech.equipment.title': 'Новейшее оборудование',
    'about.tech.equipment.description': 'Производственные линии от ведущих мировых производителей',
    'about.tech.automation.title': 'Автоматизация',
    'about.tech.automation.description': 'Полная автоматизация процессов для стабильного качества',
    'about.tech.quality.title': 'Контроль качества',
    'about.tech.quality.description': 'Многоуровневая система контроля на каждом этапе',
    'about.standards.title': 'Стандарты качества',
    'about.standards.food': 'Пищевая безопасность',
    'about.standards.eco': 'Экологичность',
    'about.standards.international': 'Международные нормы',
    'about.environment.title': 'Экологическая ответственность',
    'about.environment.waste': 'Переработка отходов',
    'about.environment.emissions': 'Выбросы в атмосферу',
    'about.environment.materials': 'Экологичные материалы',
    'about.achievements.title': 'Наши достижения',
    'about.achievements.description': 'Цифры, которые говорят о нашем успехе',
    'about.achievements.founded': 'Год основания',
    'about.achievements.founded.description': 'Современная компания с новейшими технологиями',
    'about.achievements.employees': 'Сотрудников',
    'about.achievements.employees.description': 'Команда профессионалов с опытом в упаковочной отрасли',
    'about.achievements.quality': 'Качество',
    'about.achievements.quality.description': 'Строгий контроль качества на всех этапах производства',
    'about.achievements.products': 'Видов продукции',
    'about.achievements.products.description': 'Широкий ассортимент упаковочных решений',
    'about.equipment.title': 'Наше оборудование',
    'about.equipment.description': 'Современные производственные линии от ведущих мировых производителей',
    'about.equipment.extrusion.title': 'Экструзионные линии',
    'about.equipment.extrusion.description': '5 современных линий экструзии с возможностью производства пленок толщиной от 10 до 200 микрон',
    'about.equipment.extrusion.spec': 'Производительность: до 500 кг/час',
    'about.equipment.printing.title': 'Печатные машины',
    'about.equipment.printing.description': 'Флексографские машины для многоцветной печати с высоким качеством и точностью',
    'about.equipment.printing.spec': 'До 8 цветов за проход',
    'about.equipment.laminating.title': 'Ламинирующие установки',
    'about.equipment.laminating.description': 'Оборудование для создания многослойных барьерных структур с различными свойствами',
    'about.equipment.laminating.spec': 'До 5 слоев одновременно',
    'about.equipment.packaging.title': 'Упаковочные линии',
    'about.equipment.packaging.description': 'Автоматизированные системы резки, намотки и упаковки готовой продукции',
    'about.equipment.packaging.spec': 'Полная автоматизация процесса',
    'about.equipment.laboratory.title': 'Лаборатория контроля качества',
    'about.equipment.laboratory.description': 'Современная аналитическая лаборатория для контроля всех параметров продукции',
    'about.equipment.laboratory.spec': 'Контроль на каждом этапе',
    'about.equipment.recycling.title': 'Система переработки',
    'about.equipment.recycling.description': 'Собственная линия переработки отходов производства в гранулы для повторного использования',
    'about.equipment.recycling.spec': '100% переработка отходов',
    'about.values.title': 'Наши ценности',
    'about.values.description': 'Принципы, которые определяют нашу работу и отношения с клиентами',
    'about.values.quality.title': 'Качество',
    'about.values.quality.description': 'Непрерывное совершенствование процессов и строгий контроль качества на каждом этапе производства',
    'about.values.innovation.title': 'Инновации',
    'about.values.innovation.description': 'Постоянный поиск новых технологических решений и внедрение передовых разработок в производство',
    'about.values.ecology.title': 'Экология',
    'about.values.ecology.description': 'Ответственное отношение к окружающей среде и разработка экологически чистых материалов',
    'about.values.partnership.title': 'Партнерство',
    'about.values.partnership.description': 'Долгосрочные отношения с клиентами, основанные на взаимном доверии и профессионализме',
    'about.values.efficiency.title': 'Эффективность',
    'about.values.efficiency.description': 'Оптимизация всех процессов для достижения максимальной производительности и минимизации затрат',
    'about.values.leadership.title': 'Лидерство',
    'about.values.leadership.description': 'Стремление быть лучшими в своей отрасли и задавать стандарты качества для всего рынка',
    
    // Страница "Контакты"
    'contacts.page.title': 'Свяжитесь с нами',
    'contacts.page.description': 'Мы всегда готовы ответить на ваши вопросы и обсудить возможности сотрудничества. Наша команда специалистов готова помочь вам найти оптимальные решения для ваших задач.',
    'contacts.breadcrumb.home': 'Главная',
    'contacts.breadcrumb.current': 'Контакты',
    'contacts.phone.title': 'Телефон',
    'contacts.phone.value': '+7 (717) 123-45-67',
    'contacts.phone.hours': 'Пн-Пт: 9:00 - 18:00',
    'contacts.email.title': 'Email',
    'contacts.email.value': 'info@alatau-packaging.kz',
    'contacts.email.response': 'Ответим в течение 24 часов',
    'contacts.address.title': 'Адрес',
    'contacts.address.value': 'г. Астана, р-н Есиль, Проспект Мангилик Ел, д. 36, Н.п. 78',
    'contacts.address.description': 'Главный офис и производство',
    'contacts.location.title': 'Наше местоположение',
    'contacts.location.city': 'Город:',
    'contacts.location.city.value': 'Астана',
    'contacts.location.district': 'Район:',
    'contacts.location.district.value': 'Есиль',
    'contacts.location.address': 'Адрес:',
    'contacts.location.address.value': 'Проспект Мангилик Ел, д. 36',
    'contacts.location.status': 'Офис открыт',
    'contacts.info.title': 'Информация о компании',
    'contacts.info.description': 'Официальные данные и реквизиты ТОО "ALATAU PACKAGING"',
    'contacts.info.name.title': 'Название организации',
    'contacts.info.name.ru': 'Русский:',
    'contacts.info.name.ru.value': 'ТОО "ALATAU PACKAGING"',
    'contacts.info.name.kz': 'Казахский:',
    'contacts.info.name.kz.value': '"ALATAU PACKAGING" ЖШС',
    'contacts.info.director.title': 'Руководитель',
    'contacts.info.director.name': 'ДЕМКОВСКИЙ СЕРГЕЙ',
    'contacts.info.director.position': 'Генеральный директор',
    'contacts.info.bin.title': 'БИН',
    'contacts.info.bin.value': '240740022976',
    'contacts.info.bin.description': 'Идентификационный номер',
    'contacts.info.date.title': 'Дата регистрации',
    'contacts.info.date.value': '19.07.2024',
    'contacts.info.date.description': 'Первичная регистрация',
    'contacts.info.oked.title': 'Основной ОКЭД',
    'contacts.info.oked.value': '22220',
    'contacts.info.oked.description': 'Производство пластмассовых упаковок для товаров',
    'contacts.info.krp.title': 'КРП',
    'contacts.info.krp.value': '105',
    'contacts.info.krp.description': 'Малые предприятия (≤ 5 чел.)',
    'contacts.map.title': 'Как нас найти',
    'contacts.map.description': 'Мы находимся в центре Астаны, легко добраться на любом транспорте',
    'contacts.map.address.title': 'Точный адрес',
    'contacts.map.address.value': 'г. Астана, р-н Есиль, Проспект Мангилик Ел, д. 36, Н.п. 78',
    'contacts.map.hours.title': 'Время работы',
    'contacts.map.hours.value': 'Понедельник - Пятница: 9:00 - 18:00, Суббота: 9:00 - 14:00, Воскресенье: Выходной',
    'contacts.map.transport.title': 'Как добраться',
    'contacts.map.transport.value': 'Автобусы: 1, 5, 12, 15, Троллейбусы: 2, 4, Метро: станция "Мангилик ел"',
    
    // Страница "Продукция"
    'products.page.title': 'Упаковочные решения для пищевой промышленности',
    'products.page.description': 'Полный спектр современных упаковочных решений для пищевой промышленности. Пленки для мяса, сыров, термоформовочные материалы, вакуумные пакеты и оболочки для колбасных изделий. Основано в 2024 году.',
    'products.breadcrumb.home': 'Главная',
    'products.breadcrumb.current': 'Продукция',
    'products.hero.badge': 'Наша продукция',
    'products.hero.title': 'Упаковочные решения',
    'products.hero.title.accent': 'для пищевой промышленности',
    'products.hero.description': 'Полный спектр современных упаковочных решений для пищевой промышленности. Пленки для мяса, сыров, термоформовочные материалы, вакуумные пакеты и оболочки для колбасных изделий. Основано в 2024 году.',
    'products.hero.feature1.title': 'Сертифицированное качество',
    'products.hero.feature1.description': 'Все продукты соответствуют международным стандартам безопасности',
    'products.hero.feature2.title': 'Качественная продукция',
    'products.hero.feature2.description': 'Современные технологии производства упаковочных материалов',
    'products.hero.feature3.title': 'Полный ассортимент',
    'products.hero.feature3.description': 'Широкий выбор упаковочных материалов для любых потребностей',
    'products.hero.cta.catalog': 'Получить каталог',
    'products.hero.cta.consultation': 'Консультация',
    'products.hero.visual.card1.title': 'Пищевые пленки',
    'products.hero.visual.card1.description': 'Для упаковки мясных и молочных продуктов',
    'products.hero.visual.card2.title': 'Вакуумные пакеты',
    'products.hero.visual.card2.description': 'Максимальная защита от окисления',
    'products.hero.visual.card3.title': 'Термоусадочные пленки',
    'products.hero.visual.card3.description': 'Идеальная посадка по форме продукта',
    'products.hero.stats.products': 'Видов продукции',
    'products.hero.stats.categories': 'Категорий',
    'products.hero.stats.thickness': 'Толщина (мкм)',
    'products.hero.stats.width': 'Ширина (мм)',
    'products.search.placeholder': 'Поиск продукции...',
    'products.search.found': 'Найдено:',
    'products.search.products': 'продуктов',
    'products.categories.all': 'Все продукты',
    'products.categories.food': 'Пищевые пленки',
    'products.categories.thermoforming': 'Термоформовочные пленки',
    'products.categories.shrink': 'Термоусадочные пленки',
    'products.categories.vacuum': 'Вакуумные пакеты',
    'products.categories.casing': 'Оболочки колбасные',
    'products.categories.barrier': 'Барьерные пленки',
    'products.noResults.title': 'Продукция не найдена',
    'products.noResults.description': 'Попробуйте изменить критерии поиска или выбрать другую категорию',
    'products.contact.button': 'Связаться',
    
    // Описание продукции
    'products.meat.film.name': 'Пленка для мясных продуктов',
    'products.meat.film.description': 'Специализированная пленка для упаковки мясных деликатесов, колбас и копченостей. Обеспечивает максимальную свежесть и товарный вид продукции.',
    'products.meat.film.thickness': '15-80 мкм',
    'products.meat.film.width': 'до 600 мм',
    'products.meat.film.features': 'Пищевой контакт, Высокий барьер, Устойчивость к проколу',
    'products.meat.film.price': 'от 420 тг/кг',
    
    'products.thermoforming.bops.name': 'Термоформовочная пленка БОПС',
    'products.thermoforming.bops.description': 'Двухосноориентированная полистирольная пленка для производства жестких упаковочных контейнеров. Идеальна для молочной и кондитерской промышленности.',
    'products.thermoforming.bops.thickness': '200-800 мкм',
    'products.thermoforming.bops.width': 'до 1400 мм',
    'products.thermoforming.bops.features': 'Прозрачность, Жесткость, Формуемость',
    'products.thermoforming.bops.price': 'от 650 тг/кг',
    
    'products.shrink.cheese.name': 'Термоусадочные пакеты для сыров',
    'products.shrink.cheese.description': 'Специальные термоусадочные пакеты для упаковки твердых и полутвердых сыров без дозревания. Прозрачные, глянцевые, имеют вид "дорогой упаковки".',
    'products.shrink.cheese.thickness': '20-60 мкм',
    'products.shrink.cheese.width': 'различные размеры',
    'products.shrink.cheese.features': 'Герметичность, Глянцевая поверхность, Усадка 40-60%',
    'products.shrink.cheese.price': 'от 380 тг/кг',
    
    'products.vacuum.fish.name': 'Вакуумные пакеты для рыбы',
    'products.vacuum.fish.description': 'Многослойные вакуумные пакеты с высокими барьерными свойствами для упаковки рыбы и морепродуктов. Максимально продлевают срок хранения.',
    'products.vacuum.fish.thickness': '70-120 мкм',
    'products.vacuum.fish.width': 'различные размеры',
    'products.vacuum.fish.features': 'Вакуумная упаковка, Барьер к кислороду, Прочность на разрыв',
    'products.vacuum.fish.price': 'от 520 тг/кг',
    
    'products.casing.pentaflex.name': 'Оболочка колбасная ПЕНТАФЛЕКС',
    'products.casing.pentaflex.description': 'Многослойная синтетическая оболочка для производства вареных и копченых колбас. Качественная, удобная в использовании, продлевает срок хранения.',
    'products.casing.pentaflex.thickness': '50-120 мкм',
    'products.casing.pentaflex.width': 'калибр 15-130 мм',
    'products.casing.pentaflex.features': 'Многослойность, Печатная основа, Герметичность',
    'products.casing.pentaflex.price': 'от 890 тг/кг',
    
    'products.barrier.papevoh.name': 'Барьерная пленка PA/PE/EVOH',
    'products.barrier.papevoh.description': 'Многослойная барьерная пленка с этиленвиниловым спиртом для максимальной защиты от кислорода. Используется для упаковки готовых блюд и полуфабрикатов.',
    'products.barrier.papevoh.thickness': '60-200 мкм',
    'products.barrier.papevoh.width': 'до 1000 мм',
    'products.barrier.papevoh.features': 'Кислородный барьер, Длительное хранение, Термостойкость',
    'products.barrier.papevoh.price': 'от 720 тг/кг',
    
    'products.food.bread.name': 'Flow-pack пленка для хлеба',
    'products.food.bread.description': 'Специализированная пленка для упаковки хлебобулочных изделий в флоупак. Обеспечивает свежесть и мягкость продукции в течение длительного времени.',
    'products.food.bread.thickness': '20-40 мкм',
    'products.food.bread.width': 'до 800 мм',
    'products.food.bread.features': 'Паропроницаемость, Прозрачность, Антифог покрытие',
    'products.food.bread.price': 'от 320 тг/кг',
    
    'products.shrink.ops.name': 'Термоусадочный рукав OPS',
    'products.shrink.ops.description': 'Одноосноориентированная полистирольная пленка в виде рукава для групповой упаковки бутылок и банок. Высокие декоративные свойства.',
    'products.shrink.ops.thickness': '40-70 мкм',
    'products.shrink.ops.width': 'до 500 мм',
    'products.shrink.ops.features': 'Усадка до 70%, Декоративность, Высокая прозрачность',
    'products.shrink.ops.price': 'от 450 тг/кг',
    
    'products.thermoforming.lidding.name': 'Lidding пленка для контейнеров',
    'products.thermoforming.lidding.description': 'Крышечная пленка для герметичного закрытия термоформованных контейнеров. Обеспечивает easy-peel открывание и отличные барьерные свойства.',
    'products.thermoforming.lidding.thickness': '30-80 мкм',
    'products.thermoforming.lidding.width': 'до 400 мм',
    'products.thermoforming.lidding.features': 'Easy-peel, Герметичность, Печатная основа',
    'products.thermoforming.lidding.price': 'от 580 тг/кг',
  },
  
  KZ: {
    // Навигация
    'nav.home': 'Басты бет',
    'nav.about': 'Компания туралы',
    'nav.products': 'Өнімдер',
    'nav.contacts': 'Байланыс',
    'nav.language': 'Тіл',
    
    // Главная страница
    'hero.title': 'ALATAU PACKAGING',
    'hero.subtitle': 'Орамадағы сенімді серіктесіңіз',
    'hero.description': 'Біз орама үшін заманауи полимерлі кедергі пленкаларын ұсынамыз, жоғары сапа мен сенімділікті қамтамасыз етеді. Біздің технологияларымыз орама саласындағы кез келген міндеттерді шешуге мүмкіндік береді, тұтынушылардың қажеттіліктерін қанағаттандырады.',
    'hero.cta': 'Көбірек білу',
    'hero.catalog': 'Өнімдер каталогы',
    'hero.quality': '100% Өнім сапасы',
    'hero.technologies': 'Заманауи Технологиялар',
    'hero.partner': 'Сенімді Серіктес',
    
    // О компании
    'about.title': 'Компания туралы',
    'about.description': 'ALATAU PACKAGING компаниясы Қазақстандағы орама шешімдерінің жетекші өндірушісі болып табылады',
    'about.mission': 'Біздің миссиямыз - инновациялық және экологиялық қауіпсіз орама шешімдерін ұсыну',
    'about.values': 'Біздің құндылықтарымыз',
    'about.quality': 'Сапа',
    'about.innovation': 'Инновация',
    'about.sustainability': 'Тұрақты даму',
    
    // Продукция
    'products.title': 'Біздің өнімдеріміз',
    'products.subtitle': 'Орама шешімдерінің кең ассортименті',
    'products.cardboard': 'Картонды орама',
    'products.plastic': 'Пластикті орама',
    'products.flexible': 'Икемді орама',
    'products.custom': 'Жеке орама',
    
    // Контакты
    'contacts.title': 'Бізбен байланысыңыз',
    'contacts.address': 'Мекенжай',
    'contacts.phone': 'Телефон',
    'contacts.email': 'Email',
    'contacts.workHours': 'Жұмыс сағаттары',
    'contacts.monday': 'Дүйсенбі - Жұма',
    'contacts.saturday': 'Сенбі',
    'contacts.sunday': 'Жексенбі',
    'contacts.closed': 'Жабық',
    
    // Общие
    'common.learnMore': 'Көбірек білу',
    'common.viewMore': 'Көбірек көру',
    'common.readMore': 'Одан әрі оқу',
    'common.backToTop': 'Жоғары',
    
    // Секции главной страницы
    'packaging.label': 'Орама',
    'packaging.title': 'Орама пленкаларын өндірудегі инновациялар',
    'packaging.description': '«Alatau Packaging» ЖШС - полимерлі кедергі пленкаларын өндіруге маманданған жас және динамикалық дамып келе жатқан компания. Біз ең жоғары сапа стандарттарына сәйкес келетін орама үшін заманауи шешімдерді ұсынамыз.',
    
    'quality.label': 'Сапа',
    'quality.title': 'Бизнесіңізге заманауи жабдықтар',
    'quality.description': 'Біздің өндіріс әлемдік көшбасшылардың алдыңғы технологияларымен жабдықталған. Біз әрбір пленканың жоғары сапасы мен сенімділігін кепілдейміз.',
    
    'production.label': 'Өндіріс',
    'production.title': 'Орама пленкаларын өндіру сызықтарымыз',
    'production.description': 'Біз орама үшін кең ассортименттегі пленкаларды ұсынамыз, оған термоусадочные және кедергі пленкалары кіреді. Әрбір өндіріс сызығы ең жоғары сапа стандарттарына сәйкес келеді.',
    'production.noLines': 'Қолжетімді өндіріс сызықтары жоқ',
    
    // Линии производства
    'production.windmoller.title': 'Windmoller & Holsher сызығы',
    'production.windmoller.description': 'Термоформалау үшін икемді пленкаларды өндіреміз. Біздің Windmoller & Holsher сызығы әртүрлі түрдегі орама пленкаларын өндіруде жоғары сапа мен дәлдікті қамтамасыз етеді.',
    'production.windmoller.spec1': 'Пленка ені: 2000 мм-ге дейін',
    'production.windmoller.spec2': 'Пленка қалыңдығы: 20-200 мкм',
    'production.windmoller.spec3': 'Өнімділік: 1000 кг/сағ-ға дейін',
    'production.windmoller.spec4': 'Көп қабатты құрылым: 7 қабатқа дейін',
    
    'production.kuhne.title': 'Kuhne сызығы',
    'production.kuhne.description': 'Әртүрлі қолданыстар үшін термоусадочные пленкаларды жасаймыз. Kuhne сызығы тамаша усадочные сипаттамалары бар жоғары сапалы пленкаларды өндіруге мүмкіндік береді.',
    'production.kuhne.spec1': 'Пленка ені: 1600 мм-ге дейін',
    'production.kuhne.spec2': 'Пленка қалыңдығы: 15-150 мкм',
    'production.kuhne.spec3': 'Өнімділік: 800 кг/сағ-ға дейін',
    'production.kuhne.spec4': 'Қысқару пайызы: 70%-ға дейін',
    
    'production.comexi.title': 'Comexi сызығы',
    'production.comexi.description': 'Пленкаларға басып шығарумен инновациялық шешімдерді ұсынамыз. Comexi сызығы әртүрлі түрдегі пленкаларға жоғары сапалы флексографиялық басып шығаруды қамтамасыз етеді.',
    'production.comexi.spec1': 'Басып шығару ені: 1500 мм-ге дейін',
    'production.comexi.spec2': 'Басып шығару жылдамдығы: 500 м/мин-ге дейін',
    'production.comexi.spec3': 'Бояу саны: 8 түске дейін',
    'production.comexi.spec4': 'Басып шығару ажыратымдылығы: 175 lpi-ге дейін',
    
    // Модальное окно деталей
    'modal.visitWebsite': 'Өндірушінің сайтын шолу',
    'modal.close': 'Жабу',
    'modal.closeModal': 'Модалды терезені жабу',
    
    // Футер
    'footer.newsletter.text': 'Жаңалықтар мен жаңартулар туралы хабардар болу үшін біздің хабарландыруға жазылыңыз.',
    'footer.newsletter.placeholder': 'Email мекенжайыңызды енгізіңіз',
    'footer.newsletter.subscribe': 'Жазылу',
    'footer.newsletter.disclaimer': 'Жазылу арқылы сіз біздің Құпиялылық саясатымызға келісесіз және жаңартуларды алуға келісім бересіз.',
    'footer.newsletter.privacy': 'Құпиялылық саясаты',
    'footer.column1.title': 'Бірінші баған',
    'footer.column2.title': 'Екінші баған',
    'footer.followUs': 'Бізді қадағалаңыз',
    'footer.copyright': '© 2025 Alatau Packaging. Барлық құқықтар қорғалған.',
    'footer.privacy': 'Құпиялылық саясаты',
    'footer.terms': 'Қызмет көрсету шарттары',
    'footer.cookies': 'Cookie баптаулары',
    
    // Социальные сети
    'social.facebook': 'Facebook',
    'social.instagram': 'Instagram',
    'social.twitter': 'X',
    'social.linkedin': 'LinkedIn',
    'social.youtube': 'Youtube',
    
    // Ссылки футера
    'footer.link1': 'Сілтеме Бір',
    'footer.link2': 'Сілтеме Екі',
    'footer.link3': 'Сілтеме Үш',
    'footer.link4': 'Сілтеме Төрт',
    'footer.link5': 'Сілтеме Бес',
    'footer.link6': 'Сілтеме Алты',
    'footer.link7': 'Сілтеме Жеті',
    'footer.link8': 'Сілтеме Сегіз',
    'footer.link9': 'Сілтеме Тоғыз',
    'footer.link10': 'Сілтеме Он',
    
    // Страница "О нас"
    'about.page.title': 'Компаниямыз туралы',
    'about.page.description': 'Біз Қазақстандағы полимерлі кедергі пленкаларының жетекші өндірушісіміз. Біздің миссиямыз халықаралық қауіпсіздік стандарттарына сәйкес келетін, өнімдердің жаңалығын сақтайтын жоғары сапалы орама шешімдерін қамтамасыз ету.',
    'about.breadcrumb.home': 'Басты бет',
    'about.breadcrumb.current': 'Компания туралы',
    'about.highlight.modern': 'Ең жаңа жабдықтармен заманауи өндіріс',
    'about.highlight.innovative': 'Орама үшін инновациялық шешімдер',
    'about.highlight.quality': 'Өнім сапасының жоғары стандарттары',
    'about.mission.title': 'Біздің миссиямыз',
    'about.mission.description': 'Өнімдерді және қоршаған ортаны қорғайтын инновациялық орама шешімдерін жасау',
    'about.mission.founded': 'Құрылған жылы',
    'about.mission.innovation': 'Инновация',
    'about.location.title': 'Біздің орналасқан жеріміз',
    'about.location.description': 'Қазақстанның жүрегіндегі заманауи өндіріс',
    'about.location.address': 'Мекенжай',
    'about.location.address.value': 'Астана қ., Есіл ауданы, Мәңгілік ел даңғылы, 36 үй, 78 н/п',
    'about.location.production': 'Өндіріс',
    'about.location.production.value': 'Ауданы: 15,000 м², Қуаты: 50,000 тонна/жыл',
    'about.location.research': 'Зерттеу және әзірлеу',
    'about.location.research.value': 'Өз зертханасы, Жаңа материалдарды әзірлеу',
    'about.process.title': 'Біздің өндіріс процесі',
    'about.process.description': 'Заманауи технологиялар және әрбір кезеңде қатаң бақылау',
    'about.process.step1.title': 'Шикізатты дайындау',
    'about.process.step1.description': 'Жоғары сапалы пленкаларды өндіру үшін полимерлі гранулаларды мұқият таңдау және дайындау',
    'about.process.step2.title': 'Экструзия',
    'about.process.step2.description': 'Заманауи жабдықтарда полимерлерді жұмсақ пленкаларға балқыту және пішіндеу процесі',
    'about.process.step3.title': 'Ламинирлеу',
    'about.process.step3.description': 'Әртүрлі түрдегі орама үшін көп қабатты кедергі құрылымдарын жасау',
    'about.process.step4.title': 'Басып шығару және аяқтау',
    'about.process.step4.description': 'Пленкалар бетіне басып шығару және қосымша өңдеу',
    'about.process.step5.title': 'Сапа бақылауы',
    'about.process.step5.description': 'Дайын өнімнің барлық параметрлерінің зертханалық сынақтары және тексеруі',
    'about.tech.title': 'Технологиялық артықшылықтар',
    'about.tech.equipment.title': 'Ең жаңа жабдықтар',
    'about.tech.equipment.description': 'Әлемдік көшбасшы өндірушілердің өндіріс сызықтары',
    'about.tech.automation.title': 'Автоматтандыру',
    'about.tech.automation.description': 'Тұрақты сапа үшін процестерді толық автоматтандыру',
    'about.tech.quality.title': 'Сапа бақылауы',
    'about.tech.quality.description': 'Әрбір кезеңде көп деңгейлі бақылау жүйесі',
    'about.standards.title': 'Сапа стандарттары',
    'about.standards.food': 'Азық-түлік қауіпсіздігі',
    'about.standards.eco': 'Экологиялық',
    'about.standards.international': 'Халықаралық нормалар',
    'about.environment.title': 'Экологиялық жауапкершілік',
    'about.environment.waste': 'Қалдықтарды қайта өңдеу',
    'about.environment.emissions': 'Атмосфераға шығарындылар',
    'about.environment.materials': 'Экологиялық материалдар',
    'about.achievements.title': 'Біздің жетістіктеріміз',
    'about.achievements.description': 'Біздің табысымыз туралы айтатын сандар',
    'about.achievements.founded': 'Құрылған жылы',
    'about.achievements.founded.description': 'Ең жаңа технологиялармен заманауи компания',
    'about.achievements.employees': 'Қызметкер',
    'about.achievements.employees.description': 'Орама саласындағы тәжірибесі бар кәсіби команда',
    'about.achievements.quality': 'Сапа',
    'about.achievements.quality.description': 'Өндірістің барлық кезеңдерінде қатаң сапа бақылауы',
    'about.achievements.products': 'Өнім түрлері',
    'about.achievements.products.description': 'Орама шешімдерінің кең ассортименті',
    'about.equipment.title': 'Біздің жабдықтарымыз',
    'about.equipment.description': 'Әлемдік көшбасшы өндірушілердің заманауи өндіріс сызықтары',
    'about.equipment.extrusion.title': 'Экструзиялық сызықтар',
    'about.equipment.extrusion.description': '10-ден 200 микронға дейінгі қалыңдықтағы пленкаларды өндіру мүмкіндігі бар 5 заманауи экструзиялық сызық',
    'about.equipment.extrusion.spec': 'Өнімділік: 500 кг/сағ-ға дейін',
    'about.equipment.printing.title': 'Басып шығару машиналары',
    'about.equipment.printing.description': 'Жоғары сапа мен дәлдікпен көп түсті басып шығару үшін флексографиялық машиналар',
    'about.equipment.printing.spec': 'Бір өтуде 8 түске дейін',
    'about.equipment.laminating.title': 'Ламинирлеу қондырғылары',
    'about.equipment.laminating.description': 'Әртүрлі қасиеттері бар көп қабатты кедергі құрылымдарын жасау үшін жабдықтар',
    'about.equipment.laminating.spec': 'Бір уақытта 5 қабатқа дейін',
    'about.equipment.packaging.title': 'Орама сызықтары',
    'about.equipment.packaging.description': 'Дайын өнімді кесу, орау және орама үшін автоматтандырылған жүйелер',
    'about.equipment.packaging.spec': 'Процесті толық автоматтандыру',
    'about.equipment.laboratory.title': 'Сапа бақылауы зертханасы',
    'about.equipment.laboratory.description': 'Өнімнің барлық параметрлерін бақылау үшін заманауи аналитикалық зертхана',
    'about.equipment.laboratory.spec': 'Әрбір кезеңде бақылау',
    'about.equipment.recycling.title': 'Қайта өңдеу жүйесі',
    'about.equipment.recycling.description': 'Өндіріс қалдықтарын қайта пайдалану үшін гранулаларға қайта өңдеуге арналған өз сызығы',
    'about.equipment.recycling.spec': 'Қалдықтарды 100% қайта өңдеу',
    'about.values.title': 'Біздің құндылықтарымыз',
    'about.values.description': 'Біздің жұмысымызды және тұтынушылармен қарым-қатынасты анықтайтын принциптер',
    'about.values.quality.title': 'Сапа',
    'about.values.quality.description': 'Процестерді үздіксіз жетілдіру және өндірістің әрбір кезеңінде қатаң сапа бақылауы',
    'about.values.innovation.title': 'Инновация',
    'about.values.innovation.description': 'Жаңа технологиялық шешімдерді үздіксіз іздеу және өндіріске алдыңғы әзірлемелерді енгізу',
    'about.values.ecology.title': 'Экология',
    'about.values.ecology.description': 'Қоршаған ортаға жауапкершілікпен қарау және экологиялық таза материалдарды әзірлеу',
    'about.values.partnership.title': 'Серіктестік',
    'about.values.partnership.description': 'Сенім және кәсібилікке негізделген тұтынушылармен ұзақ мерзімді қарым-қатынас',
    'about.values.efficiency.title': 'Тиімділік',
    'about.values.efficiency.description': 'Максималды өнімділікке жету және шығындарды азайту үшін барлық процестерді оңтайландыру',
    'about.values.leadership.title': 'Көшбасшылық',
    'about.values.leadership.description': 'Өз саласындағы ең жақсы болуға ұмтылу және бүкіл нарық үшін сапа стандарттарын белгілеу',
    
    // Страница "Контакты"
    'contacts.page.title': 'Бізбен байланысыңыз',
    'contacts.page.description': 'Біз әрқашан сіздің сұрақтарыңызға жауап беруге және ынтымақтастық мүмкіндіктерін талқылауға дайынбыз. Біздің мамандар тобы сізге міндеттеріңізге оңтайлы шешімдер табуға көмектесуге дайын.',
    'contacts.breadcrumb.home': 'Басты бет',
    'contacts.breadcrumb.current': 'Байланыс',
    'contacts.phone.title': 'Телефон',
    'contacts.phone.value': '+7 (717) 123-45-67',
    'contacts.phone.hours': 'Дж-Жм: 9:00 - 18:00',
    'contacts.email.title': 'Email',
    'contacts.email.value': 'info@alatau-packaging.kz',
    'contacts.email.response': '24 сағат ішінде жауап береміз',
    'contacts.address.title': 'Мекенжай',
    'contacts.address.value': 'Астана қ., Есіл ауданы, Мәңгілік ел даңғылы, 36 үй, 78 н/п',
    'contacts.address.description': 'Бас кеңсе және өндіріс',
    'contacts.location.title': 'Біздің орналасқан жеріміз',
    'contacts.location.city': 'Қала:',
    'contacts.location.city.value': 'Астана',
    'contacts.location.district': 'Аудан:',
    'contacts.location.district.value': 'Есіл',
    'contacts.location.address': 'Мекенжай:',
    'contacts.location.address.value': 'Мәңгілік ел даңғылы, 36 үй',
    'contacts.location.status': 'Кеңсе ашық',
    'contacts.info.title': 'Компания туралы ақпарат',
    'contacts.info.description': '"ALATAU PACKAGING" ЖШС-нің ресми деректері мен реквизиттері',
    'contacts.info.name.title': 'Ұйым атауы',
    'contacts.info.name.ru': 'Орысша:',
    'contacts.info.name.ru.value': 'ТОО "ALATAU PACKAGING"',
    'contacts.info.name.kz': 'Қазақша:',
    'contacts.info.name.kz.value': '"ALATAU PACKAGING" ЖШС',
    'contacts.info.director.title': 'Басшы',
    'contacts.info.director.name': 'ДЕМКОВСКИЙ СЕРГЕЙ',
    'contacts.info.director.position': 'Бас директор',
    'contacts.info.bin.title': 'БСН',
    'contacts.info.bin.value': '240740022976',
    'contacts.info.bin.description': 'Салық нөірі',
    'contacts.info.date.title': 'Тіркеу күні',
    'contacts.info.date.value': '19.07.2024',
    'contacts.info.date.description': 'Алғашқы тіркеу',
    'contacts.info.oked.title': 'Негізгі ОКЭД',
    'contacts.info.oked.value': '22220',
    'contacts.info.oked.description': 'Тауарларға арналған пластмасса орамаларын өндіру',
    'contacts.info.krp.title': 'КРП',
    'contacts.info.krp.value': '105',
    'contacts.info.krp.description': 'Кіші кәсіпорындар (≤ 5 адам)',
    'contacts.map.title': 'Бізді қалай табуға болады',
    'contacts.map.description': 'Біз Астананың орталығында орналасқан, кез келген көлікпен оңай жетуге болады',
    'contacts.map.address.title': 'Дәл мекенжай',
    'contacts.map.address.value': 'Астана қ., Есіл ауданы, Мәңгілік ел даңғылы, 36 үй, 78 н/п',
    'contacts.map.hours.title': 'Жұмыс уақыты',
    'contacts.map.hours.value': 'Дүйсенбі - Жұма: 9:00 - 18:00, Сенбі: 9:00 - 14:00, Жексенбі: Демалыс',
    'contacts.map.transport.title': 'Қалай жетуге болады',
    'contacts.map.transport.value': 'Автобустар: 1, 5, 12, 15, Троллейбус: 2, 4, Метро: "Мәңгілік ел" станциясы',
    
    // Страница "Продукция"
    'products.page.title': 'Азық-түлік өнеркәсібіне арналған орама шешімдері',
    'products.page.description': 'Азық-түлік өнеркәсібіне арналған заманауи орама шешімдерінің толық спектрі. Ет, ірімшік үшін пленкалар, термоформалау материалдары, вакуумдық пакеттер және колбаса өнімдері үшін қабықтар. 2024 жылы құрылған.',
    'products.breadcrumb.home': 'Басты бет',
    'products.breadcrumb.current': 'Өнімдер',
    'products.hero.badge': 'Біздің өнімдеріміз',
    'products.hero.title': 'Орама шешімдері',
    'products.hero.title.accent': 'азық-түлік өнеркәсібі үшін',
    'products.hero.description': 'Азық-түлік өнеркәсібіне арналған заманауи орама шешімдерінің толық спектрі. Ет, ірімшік үшін пленкалар, термоформалау материалдары, вакуумдық пакеттер және колбаса өнімдері үшін қабықтар. 2024 жылы құрылған.',
    'products.hero.feature1.title': 'Сертификатталған сапа',
    'products.hero.feature1.description': 'Барлық өнімдер халықаралық қауіпсіздік стандарттарына сәйкес келеді',
    'products.hero.feature2.title': 'Сапалы өнімдер',
    'products.hero.feature2.description': 'Орама материалдарын өндірудегі заманауи технологиялар',
    'products.hero.feature3.title': 'Толық ассортимент',
    'products.hero.feature3.description': 'Кез келген қажеттіліктерге арналған орама материалдарының кең таңдауы',
    'products.hero.cta.catalog': 'Каталог алу',
    'products.hero.cta.consultation': 'Кеңес',
    'products.hero.visual.card1.title': 'Азық-түлік пленкалары',
    'products.hero.visual.card1.description': 'Ет және сүт өнімдерін орама үшін',
    'products.hero.visual.card2.title': 'Вакуумдық пакеттер',
    'products.hero.visual.card2.description': 'Тотығудан максималды қорғаныс',
    'products.hero.visual.card3.title': 'Термоусадочные пленкалар',
    'products.hero.visual.card3.description': 'Өнім пішініне сәйкес идеалды отыру',
    'products.hero.stats.products': 'Өнім түрлері',
    'products.hero.stats.categories': 'Санаттар',
    'products.hero.stats.thickness': 'Қалыңдық (мкм)',
    'products.hero.stats.width': 'Ені (мм)',
    'products.search.placeholder': 'Өнімдерді іздеу...',
    'products.search.found': 'Табылды:',
    'products.search.products': 'өнім',
    'products.categories.all': 'Барлық өнімдер',
    'products.categories.food': 'Азық-түлік пленкалары',
    'products.categories.thermoforming': 'Термоформалау пленкалары',
    'products.categories.shrink': 'Термоусадочные пленкалар',
    'products.categories.vacuum': 'Вакуумдық пакеттер',
    'products.categories.casing': 'Колбаса қабықтары',
    'products.categories.barrier': 'Кедергі пленкалары',
    'products.noResults.title': 'Өнімдер табылмады',
    'products.noResults.description': 'Іздеу критерийлерін өзгертуге немесе басқа санатты таңдауға тырысыңыз',
    'products.contact.button': 'Байланысу',
    
    // Описание продукции на казахском
    'products.meat.film.name': 'Ет өнімдері үшін пленка',
    'products.meat.film.description': 'Ет деликатестерін, колбасалар мен копченые өнімдерді орама үшін арналған мамандандырылған пленка. Өнімнің максималды жаңалығын және сауда көрінісін қамтамасыз етеді.',
    'products.meat.film.thickness': '15-80 мкм',
    'products.meat.film.width': '600 мм-ге дейін',
    'products.meat.film.features': 'Азық-түлікпен байланыс, Жоғары кедергі, Тесуге төзімділік',
    'products.meat.film.price': '420 тг/кг-нан бастап',
    
    'products.thermoforming.bops.name': 'Термоформалау БОПС пленкасы',
    'products.thermoforming.bops.description': 'Қатты орама контейнерлерін өндіру үшін екі осьті бағытталған полистирол пленкасы. Сүт және кондитер өнеркәсібі үшін идеалды.',
    'products.thermoforming.bops.thickness': '200-800 мкм',
    'products.thermoforming.bops.width': '1400 мм-ге дейін',
    'products.thermoforming.bops.features': 'Мөлдірлік, Қаттылық, Пішіндеу',
    'products.thermoforming.bops.price': '650 тг/кг-нан бастап',
    
    'products.shrink.cheese.name': 'Ірімшік үшін термоусадочные пакеттер',
    'products.shrink.cheese.description': 'Қатты және жартылай қатты ірімшіктерді пісірілмеген күйде орама үшін арналған арнайы термоусадочные пакеттер. Мөлдір, жылтыр, "қымбат орама" көрінісіне ие.',
    'products.shrink.cheese.thickness': '20-60 мкм',
    'products.shrink.cheese.width': 'Әртүрлі өлшемдер',
    'products.shrink.cheese.features': 'Герметичность, Жылтыр бет, 40-60% қысқару',
    'products.shrink.cheese.price': '380 тг/кг-нан бастап',
    
    'products.vacuum.fish.name': 'Балық үшін вакуумдық пакеттер',
    'products.vacuum.fish.description': 'Балық және теңіз өнімдерін орама үшін жоғары кедергі қасиеттері бар көп қабатты вакуумдық пакеттер. Сақтау мерзімін максималды ұзартады.',
    'products.vacuum.fish.thickness': '70-120 мкм',
    'products.vacuum.fish.width': 'Әртүрлі өлшемдер',
    'products.vacuum.fish.features': 'Вакуумдық орама, Оттегіге кедергі, Жырылуға беріктілік',
    'products.vacuum.fish.price': '520 тг/кг-нан бастап',
    
    'products.casing.pentaflex.name': 'Колбаса қабығы ПЕНТАФЛЕКС',
    'products.casing.pentaflex.description': 'Пісірілген және копченые колбасаларды өндіру үшін көп қабатты синтетикалық қабық. Сапалы, пайдалануға ыңғайлы, сақтау мерзімін ұзартады.',
    'products.casing.pentaflex.thickness': '50-120 мкм',
    'products.casing.pentaflex.width': '15-130 мм калибр',
    'products.casing.pentaflex.features': 'Көп қабаттылық, Басып шығару негізі, Герметичность',
    'products.casing.pentaflex.price': '890 тг/кг-нан бастап',
    
    'products.barrier.papevoh.name': 'Кедергі пленкасы PA/PE/EVOH',
    'products.barrier.papevoh.description': 'Оттегіден максималды қорғаныс үшін этиленвинил спирті бар көп қабатты кедергі пленкасы. Дайын тағамдар мен жартылай фабрикаттарды орама үшін қолданылады.',
    'products.barrier.papevoh.thickness': '60-200 мкм',
    'products.barrier.papevoh.width': '1000 мм-ге дейін',
    'products.barrier.papevoh.features': 'Оттегі кедергісі, Ұзақ сақтау, Жылуға төзімділік',
    'products.barrier.papevoh.price': '720 тг/кг-нан бастап',
    
    'products.food.bread.name': 'Нан үшін Flow-pack пленкасы',
    'products.food.bread.description': 'Флоупакте нан-нан өнімдерін орама үшін арналған мамандандырылған пленка. Ұзақ уақыт бойы өнімнің жаңалығын және жұмсақтығын қамтамасыз етеді.',
    'products.food.bread.thickness': '20-40 мкм',
    'products.food.bread.width': '800 мм-ге дейін',
    'products.food.bread.features': 'Бу өткізгіштік, Мөлдірлік, Антифог жабын',
    'products.food.bread.price': '320 тг/кг-нан бастап',
    
    'products.shrink.ops.name': 'OPS термоусадочные рукав',
    'products.shrink.ops.description': 'Бөтелкелер мен банкаларды топтық орама үшін рукав түріндегі бір осьті бағытталған полистирол пленкасы. Жоғары декоративті қасиеттер.',
    'products.shrink.ops.thickness': '40-70 мкм',
    'products.shrink.ops.width': '500 мм-ге дейін',
    'products.shrink.ops.features': '70%-ға дейін қысқару, Декоративтілік, Жоғары мөлдірлік',
    'products.shrink.ops.price': '450 тг/кг-нан бастап',
    
    'products.thermoforming.lidding.name': 'Контейнерлер үшін Lidding пленкасы',
    'products.thermoforming.lidding.description': 'Термоформаланған контейнерлерді герметикалық жабу үшін крышечная пленка. Easy-peel ашу және тамаша кедергі қасиеттерін қамтамасыз етеді.',
    'products.thermoforming.lidding.thickness': '30-80 мкм',
    'products.thermoforming.lidding.width': '400 мм-ге дейін',
    'products.thermoforming.lidding.features': 'Easy-peel, Герметичность, Басып шығару негізі',
    'products.thermoforming.lidding.price': '580 тг/кг-нан бастап',
  },
  
  EN: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.products': 'Products',
    'nav.contacts': 'Contacts',
    'nav.language': 'Language',
    
    // Home page
    'hero.title': 'ALATAU PACKAGING',
    'hero.subtitle': 'Your reliable partner in packaging',
    'hero.description': 'We offer modern polymer barrier films for packaging, ensuring high quality and reliability. Our technologies allow us to solve any packaging challenges, meeting customer needs.',
    'hero.cta': 'Learn more',
    'hero.catalog': 'Product catalog',
    'hero.quality': '100% Product quality',
    'hero.technologies': 'Modern Technologies',
    'hero.partner': 'Reliable Partner',
    
    // About
    'about.title': 'About Company',
    'about.description': 'ALATAU PACKAGING is a leading manufacturer of packaging solutions in Kazakhstan',
    'about.mission': 'Our mission is to provide innovative and environmentally safe packaging solutions',
    'about.values': 'Our values',
    'about.quality': 'Quality',
    'about.innovation': 'Innovation',
    'about.sustainability': 'Sustainability',
    
    // Products
    'products.title': 'Our Products',
    'products.subtitle': 'Wide range of packaging solutions',
    'products.cardboard': 'Cardboard packaging',
    'products.plastic': 'Plastic packaging',
    'products.flexible': 'Flexible packaging',
    'products.custom': 'Custom packaging',
    
    // Contacts
    'contacts.title': 'Contact us',
    'contacts.address': 'Address',
    'contacts.phone': 'Phone',
    'contacts.email': 'Email',
    'contacts.workHours': 'Working hours',
    'contacts.monday': 'Monday - Friday',
    'contacts.saturday': 'Saturday',
    'contacts.sunday': 'Sunday',
    'contacts.closed': 'Closed',
    
    // Common
    'common.learnMore': 'Learn more',
    'common.viewMore': 'View more',
    'common.readMore': 'Read more',
    'common.backToTop': 'Back to top',
    
    // Main page sections
    'packaging.label': 'Packaging',
    'packaging.title': 'Innovations in packaging film production',
    'packaging.description': 'Alatau Packaging LLP is a young and dynamically developing company specializing in the production of polymer barrier films. We offer modern packaging solutions that meet the highest quality standards.',
    
    'quality.label': 'Quality',
    'quality.title': 'Modern equipment for your business',
    'quality.description': 'Our production is equipped with advanced technologies from world leaders. We guarantee high quality and reliability of every film.',
    
    'production.label': 'Production',
    'production.title': 'Our packaging film production lines',
    'production.description': 'We offer a wide range of films for packaging, including shrink and barrier films. Each production line meets the highest quality standards.',
    'production.noLines': 'No production lines available',
    
    // Production lines
    'production.windmoller.title': 'Windmoller & Holsher Line',
    'production.windmoller.description': 'We produce flexible films for thermoforming. Our Windmoller & Holsher line ensures high quality and precision in the production of various types of packaging films.',
    'production.windmoller.spec1': 'Film width: up to 2000 mm',
    'production.windmoller.spec2': 'Film thickness: 20-200 µm',
    'production.windmoller.spec3': 'Productivity: up to 1000 kg/hour',
    'production.windmoller.spec4': 'Multilayer structure: up to 7 layers',
    
    'production.kuhne.title': 'Kuhne Line',
    'production.kuhne.description': 'We manufacture shrink films for various applications. The Kuhne line allows us to produce high-quality films with excellent shrink characteristics.',
    'production.kuhne.spec1': 'Film width: up to 1600 mm',
    'production.kuhne.spec2': 'Film thickness: 15-150 µm',
    'production.kuhne.spec3': 'Productivity: up to 800 kg/hour',
    'production.kuhne.spec4': 'Shrink percentage: up to 70%',
    
    'production.comexi.title': 'Comexi Line',
    'production.comexi.description': 'We offer innovative solutions with printing on films. The Comexi line provides high-quality flexographic printing on various types of films.',
    'production.comexi.spec1': 'Printing width: up to 1500 mm',
    'production.comexi.spec2': 'Printing speed: up to 500 m/min',
    'production.comexi.spec3': 'Number of colors: up to 8 colors',
    'production.comexi.spec4': 'Printing resolution: up to 175 lpi',
    
    // Modal window details
    'modal.visitWebsite': 'Visit manufacturer website',
    'modal.close': 'Close',
    'modal.closeModal': 'Close modal window',
    
    // Footer
    'footer.newsletter.text': 'Subscribe to our newsletter to stay updated on news and updates.',
    'footer.newsletter.placeholder': 'Enter your email',
    'footer.newsletter.subscribe': 'Subscribe',
    'footer.newsletter.disclaimer': 'By subscribing, you agree to our Privacy Policy and consent to receive updates.',
    'footer.newsletter.privacy': 'Privacy Policy',
    'footer.column1.title': 'Column One',
    'footer.column2.title': 'Column Two',
    'footer.followUs': 'Follow us',
    'footer.copyright': '© 2025 Alatau Packaging. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Settings',
    
    // Social media
    'social.facebook': 'Facebook',
    'social.instagram': 'Instagram',
    'social.twitter': 'X',
    'social.linkedin': 'LinkedIn',
    'social.youtube': 'Youtube',
    
    // Footer links
    'footer.link1': 'Link One',
    'footer.link2': 'Link Two',
    'footer.link3': 'Link Three',
    'footer.link4': 'Link Four',
    'footer.link5': 'Link Five',
    'footer.link6': 'Link Six',
    'footer.link7': 'Link Seven',
    'footer.link8': 'Link Eight',
    'footer.link9': 'Link Nine',
    'footer.link10': 'Link Ten',
    
    // About page
    'about.page.title': 'About Our Company',
    'about.page.description': 'We are the leading manufacturer of polymer barrier films in Kazakhstan. Our mission is to provide high-quality packaging solutions that preserve product freshness and meet international safety standards.',
    'about.breadcrumb.home': 'Home',
    'about.breadcrumb.current': 'About Company',
    'about.highlight.modern': 'Modern production with the latest equipment',
    'about.highlight.innovative': 'Innovative packaging solutions',
    'about.highlight.quality': 'High standards of product quality',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'Creating innovative packaging solutions that protect products and the environment',
    'about.mission.founded': 'Year Founded',
    'about.mission.innovation': 'Innovation',
    'about.location.title': 'Our Location',
    'about.location.description': 'Modern production in the heart of Kazakhstan',
    'about.location.address': 'Address',
    'about.location.address.value': 'Astana, Esil district, Mangilik El avenue, 36, 78 n/p',
    'about.location.production': 'Production',
    'about.location.production.value': 'Area: 15,000 m², Capacity: 50,000 tons/year',
    'about.location.research': 'Research and Development',
    'about.location.research.value': 'Own laboratory, Development of new materials',
    'about.process.title': 'Our Production Process',
    'about.process.description': 'Modern technologies and strict control at every stage',
    'about.process.step1.title': 'Raw Material Preparation',
    'about.process.step1.description': 'Careful selection and preparation of polymer granules for the production of high-quality films',
    'about.process.step2.title': 'Extrusion',
    'about.process.step2.description': 'The process of melting and forming polymers into thin films on modern equipment',
    'about.process.step3.title': 'Lamination',
    'about.process.step3.description': 'Creating multilayer barrier structures for various types of packaging',
    'about.process.step4.title': 'Printing and Finishing',
    'about.process.step4.description': 'Applying printing and additional surface treatment of films',
    'about.process.step5.title': 'Quality Control',
    'about.process.step5.description': 'Laboratory testing and verification of all parameters of finished products',
    'about.tech.title': 'Technological Advantages',
    'about.tech.equipment.title': 'Latest Equipment',
    'about.tech.equipment.description': 'Production lines from leading world manufacturers',
    'about.tech.automation.title': 'Automation',
    'about.tech.automation.description': 'Full automation of processes for stable quality',
    'about.tech.quality.title': 'Quality Control',
    'about.tech.quality.description': 'Multi-level control system at every stage',
    'about.standards.title': 'Quality Standards',
    'about.standards.food': 'Food Safety',
    'about.standards.eco': 'Environmental',
    'about.standards.international': 'International Standards',
    'about.environment.title': 'Environmental Responsibility',
    'about.environment.waste': 'Waste Recycling',
    'about.environment.emissions': 'Atmospheric Emissions',
    'about.environment.materials': 'Eco-friendly Materials',
    'about.achievements.title': 'Our Achievements',
    'about.achievements.description': 'Numbers that speak of our success',
    'about.achievements.founded': 'Year Founded',
    'about.achievements.founded.description': 'Modern company with the latest technologies',
    'about.achievements.employees': 'Employees',
    'about.achievements.employees.description': 'Team of professionals with experience in the packaging industry',
    'about.achievements.quality': 'Quality',
    'about.achievements.quality.description': 'Strict quality control at all stages of production',
    'about.achievements.products': 'Product Types',
    'about.achievements.products.description': 'Wide range of packaging solutions',
    'about.equipment.title': 'Our Equipment',
    'about.equipment.description': 'Modern production lines from leading world manufacturers',
    'about.equipment.extrusion.title': 'Extrusion Lines',
    'about.equipment.extrusion.description': '5 modern extrusion lines with the ability to produce films with thickness from 10 to 200 microns',
    'about.equipment.extrusion.spec': 'Productivity: up to 500 kg/hour',
    'about.equipment.printing.title': 'Printing Machines',
    'about.equipment.printing.description': 'Flexographic machines for multi-color printing with high quality and precision',
    'about.equipment.printing.spec': 'Up to 8 colors per pass',
    'about.equipment.laminating.title': 'Laminating Units',
    'about.equipment.laminating.description': 'Equipment for creating multilayer barrier structures with various properties',
    'about.equipment.laminating.spec': 'Up to 5 layers simultaneously',
    'about.equipment.packaging.title': 'Packaging Lines',
    'about.equipment.packaging.description': 'Automated systems for cutting, winding and packaging of finished products',
    'about.equipment.packaging.spec': 'Full process automation',
    'about.equipment.laboratory.title': 'Quality Control Laboratory',
    'about.equipment.laboratory.description': 'Modern analytical laboratory for monitoring all product parameters',
    'about.equipment.laboratory.spec': 'Control at every stage',
    'about.equipment.recycling.title': 'Recycling System',
    'about.equipment.recycling.description': 'Own line for recycling production waste into granules for reuse',
    'about.equipment.recycling.spec': '100% waste recycling',
    'about.values.title': 'Our Values',
    'about.values.description': 'Principles that define our work and relationships with clients',
    'about.values.quality.title': 'Quality',
    'about.values.quality.description': 'Continuous improvement of processes and strict quality control at every stage of production',
    'about.values.innovation.title': 'Innovation',
    'about.values.innovation.description': 'Continuous search for new technological solutions and implementation of advanced developments in production',
    'about.values.ecology.title': 'Ecology',
    'about.values.ecology.description': 'Responsible attitude to the environment and development of environmentally friendly materials',
    'about.values.partnership.title': 'Partnership',
    'about.values.partnership.description': 'Long-term relationships with clients based on mutual trust and professionalism',
    'about.values.efficiency.title': 'Efficiency',
    'about.values.efficiency.description': 'Optimization of all processes to achieve maximum productivity and minimize costs',
    'about.values.leadership.title': 'Leadership',
    'about.values.leadership.description': 'Striving to be the best in our industry and set quality standards for the entire market',
    
    // Contacts page
    'contacts.page.title': 'Contact us',
    'contacts.page.description': 'We are always ready to answer your questions and discuss cooperation opportunities. Our team of specialists is ready to help you find optimal solutions for your tasks.',
    'contacts.breadcrumb.home': 'Home',
    'contacts.breadcrumb.current': 'Contacts',
    'contacts.phone.title': 'Phone',
    'contacts.phone.value': '+7 (717) 123-45-67',
    'contacts.phone.hours': 'Mon-Fri: 9:00 - 18:00',
    'contacts.email.title': 'Email',
    'contacts.email.value': 'info@alatau-packaging.kz',
    'contacts.email.response': 'We will respond within 24 hours',
    'contacts.address.title': 'Address',
    'contacts.address.value': 'Astana, Esil district, Mangilik El avenue, 36, 78 n/p',
    'contacts.address.description': 'Main office and production',
    'contacts.location.title': 'Our location',
    'contacts.location.city': 'City:',
    'contacts.location.city.value': 'Astana',
    'contacts.location.district': 'District:',
    'contacts.location.district.value': 'Esil',
    'contacts.location.address': 'Address:',
    'contacts.location.address.value': 'Mangilik El avenue, 36',
    'contacts.location.status': 'Office is open',
    'contacts.info.title': 'Company information',
    'contacts.info.description': 'Official data and details of ALATAU PACKAGING LLP',
    'contacts.info.name.title': 'Organization name',
    'contacts.info.name.ru': 'Russian:',
    'contacts.info.name.ru.value': 'ALATAU PACKAGING LLP',
    'contacts.info.name.kz': 'Kazakh:',
    'contacts.info.name.kz.value': 'ALATAU PACKAGING ЖШС',
    'contacts.info.director.title': 'Director',
    'contacts.info.director.name': 'DEMKOVSKIY SERGEY',
    'contacts.info.director.position': 'General Director',
    'contacts.info.bin.title': 'BIN',
    'contacts.info.bin.value': '240740022976',
    'contacts.info.bin.description': 'Tax identification number',
    'contacts.info.date.title': 'Registration date',
    'contacts.info.date.value': '19.07.2024',
    'contacts.info.date.description': 'Primary registration',
    'contacts.info.oked.title': 'Main OKED',
    'contacts.info.oked.value': '22220',
    'contacts.info.oked.description': 'Production of plastic packaging for goods',
    'contacts.info.krp.title': 'KRP',
    'contacts.info.krp.value': '105',
    'contacts.info.krp.description': 'Small enterprises (≤ 5 people)',
    'contacts.map.title': 'How to find us',
    'contacts.map.description': 'We are located in the center of Astana, easy to reach by any transport',
    'contacts.map.address.title': 'Exact address',
    'contacts.map.address.value': 'Astana, Esil district, Mangilik El avenue, 36, 78 n/p',
    'contacts.map.hours.title': 'Working hours',
    'contacts.map.hours.value': 'Monday - Friday: 9:00 - 18:00, Saturday: 9:00 - 14:00, Sunday: Closed',
    'contacts.map.transport.title': 'How to get there',
    'contacts.map.transport.value': 'Buses: 1, 5, 12, 15, Trolleybuses: 2, 4, Metro: "Mangilik el" station',
    
    // Products page
    'products.page.title': 'Packaging solutions for food industry',
    'products.page.description': 'Complete range of modern packaging solutions for the food industry. Films for meat, cheese, thermoforming materials, vacuum bags and casings for sausage products. Founded in 2024.',
    'products.breadcrumb.home': 'Home',
    'products.breadcrumb.current': 'Products',
    'products.hero.badge': 'Our products',
    'products.hero.title': 'Packaging solutions',
    'products.hero.title.accent': 'for food industry',
    'products.hero.description': 'Complete range of modern packaging solutions for the food industry. Films for meat, cheese, thermoforming materials, vacuum bags and casings for sausage products. Founded in 2024.',
    'products.hero.feature1.title': 'Certified quality',
    'products.hero.feature1.description': 'All products meet international safety standards',
    'products.hero.feature2.title': 'Quality products',
    'products.hero.feature2.description': 'Modern technologies for production of packaging materials',
    'products.hero.feature3.title': 'Complete assortment',
    'products.hero.feature3.description': 'Wide selection of packaging materials for any needs',
    'products.hero.cta.catalog': 'Get catalog',
    'products.hero.cta.consultation': 'Consultation',
    'products.hero.visual.card1.title': 'Food films',
    'products.hero.visual.card1.description': 'For packaging meat and dairy products',
    'products.hero.visual.card2.title': 'Vacuum bags',
    'products.hero.visual.card2.description': 'Maximum protection against oxidation',
    'products.hero.visual.card3.title': 'Shrink films',
    'products.hero.visual.card3.description': 'Perfect fit to product shape',
    'products.hero.stats.products': 'Product types',
    'products.hero.stats.categories': 'Categories',
    'products.hero.stats.thickness': 'Thickness (µm)',
    'products.hero.stats.width': 'Width (mm)',
    'products.search.placeholder': 'Search products...',
    'products.search.found': 'Found:',
    'products.search.products': 'products',
    'products.categories.all': 'All products',
    'products.categories.food': 'Food films',
    'products.categories.thermoforming': 'Thermoforming films',
    'products.categories.shrink': 'Shrink films',
    'products.categories.vacuum': 'Vacuum bags',
    'products.categories.casing': 'Sausage casings',
    'products.categories.barrier': 'Barrier films',
    'products.noResults.title': 'Products not found',
    'products.noResults.description': 'Try changing search criteria or selecting another category',
    'products.contact.button': 'Contact',
    
    // Product descriptions in English
    'products.meat.film.name': 'Film for meat products',
    'products.meat.film.description': 'Specialized film for packaging meat delicacies, sausages and smoked products. Ensures maximum freshness and presentation of products.',
    'products.meat.film.thickness': '15-80 µm',
    'products.meat.film.width': 'up to 600 mm',
    'products.meat.film.features': 'Food contact, High barrier, Puncture resistance',
    'products.meat.film.price': 'from 420 tenge/kg',
    
    'products.thermoforming.bops.name': 'Thermoforming BOPS film',
    'products.thermoforming.bops.description': 'Biaxially oriented polystyrene film for the production of rigid packaging containers. Ideal for dairy and confectionery industries.',
    'products.thermoforming.bops.thickness': '200-800 µm',
    'products.thermoforming.bops.width': 'up to 1400 mm',
    'products.thermoforming.bops.features': 'Transparency, Rigidity, Formability',
    'products.thermoforming.bops.price': 'from 650 tenge/kg',
    
    'products.shrink.cheese.name': 'Shrink bags for cheese',
    'products.shrink.cheese.description': 'Special shrink bags for packaging hard and semi-hard cheeses without ripening. Transparent, glossy, have the appearance of "expensive packaging".',
    'products.shrink.cheese.thickness': '20-60 µm',
    'products.shrink.cheese.width': 'various sizes',
    'products.shrink.cheese.features': 'Hermeticity, Glossy surface, 40-60% shrinkage',
    'products.shrink.cheese.price': 'from 380 tenge/kg',
    
    'products.vacuum.fish.name': 'Vacuum bags for fish',
    'products.vacuum.fish.description': 'Multilayer vacuum bags with high barrier properties for packaging fish and seafood. Maximally extend shelf life.',
    'products.vacuum.fish.thickness': '70-120 µm',
    'products.vacuum.fish.width': 'various sizes',
    'products.vacuum.fish.features': 'Vacuum packaging, Oxygen barrier, Tear resistance',
    'products.vacuum.fish.price': 'from 520 tenge/kg',
    
    'products.casing.pentaflex.name': 'Sausage casing PENTAFLEX',
    'products.casing.pentaflex.description': 'Multilayer synthetic casing for the production of boiled and smoked sausages. High quality, easy to use, extends shelf life.',
    'products.casing.pentaflex.thickness': '50-120 µm',
    'products.casing.pentaflex.width': '15-130 mm caliber',
    'products.casing.pentaflex.features': 'Multilayer, Print base, Hermeticity',
    'products.casing.pentaflex.price': 'from 890 tenge/kg',
    
    'products.barrier.papevoh.name': 'Barrier film PA/PE/EVOH',
    'products.barrier.papevoh.description': 'Multilayer barrier film with ethylene vinyl alcohol for maximum oxygen protection. Used for packaging ready meals and semi-finished products.',
    'products.barrier.papevoh.thickness': '60-200 µm',
    'products.barrier.papevoh.width': 'up to 1000 mm',
    'products.barrier.papevoh.features': 'Oxygen barrier, Long storage, Heat resistance',
    'products.barrier.papevoh.price': 'from 720 tenge/kg',
    
    'products.food.bread.name': 'Flow-pack film for bread',
    'products.food.bread.description': 'Specialized film for packaging bakery products in flow-pack. Ensures freshness and softness of products for a long time.',
    'products.food.bread.thickness': '20-40 µm',
    'products.food.bread.width': 'up to 800 mm',
    'products.food.bread.features': 'Vapor permeability, Transparency, Antifog coating',
    'products.food.bread.price': 'from 320 tenge/kg',
    
    'products.shrink.ops.name': 'OPS shrink sleeve',
    'products.shrink.ops.description': 'Uniaxially oriented polystyrene film in the form of a sleeve for group packaging of bottles and jars. High decorative properties.',
    'products.shrink.ops.thickness': '40-70 µm',
    'products.shrink.ops.width': 'up to 500 mm',
    'products.shrink.ops.features': 'Shrinkage up to 70%, Decorative, High transparency',
    'products.shrink.ops.price': 'from 450 tenge/kg',
    
    'products.thermoforming.lidding.name': 'Lidding film for containers',
    'products.thermoforming.lidding.description': 'Lidding film for hermetic sealing of thermoformed containers. Provides easy-peel opening and excellent barrier properties.',
    'products.thermoforming.lidding.thickness': '30-80 µm',
    'products.thermoforming.lidding.width': 'up to 400 mm',
    'products.thermoforming.lidding.features': 'Easy-peel, Hermeticity, Print base',
    'products.thermoforming.lidding.price': 'from 580 tenge/kg',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('RU');

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    // Сохраняем выбор языка в localStorage
    localStorage.setItem('preferredLanguage', language);
  };

  const t = (key: keyof TranslationKeys): string => {
    const translation = translations[currentLanguage];
    return translation[key] || key;
  };

  // Загружаем сохраненный язык при инициализации
  React.useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage') as Language;
    if (savedLanguage && ['RU', 'KZ', 'EN'].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 