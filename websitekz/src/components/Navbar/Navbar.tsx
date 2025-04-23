import React from 'react';
import './Navbar.scss';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">Logo</div>
        <div className="navbar__menu">
          <a href="/" className="navbar__link">Главная страница</a>
          <a href="/about" className="navbar__link">О компании</a>
          <a href="/services" className="navbar__link">Наши услуги</a>
          <div className="navbar__dropdown">
            <button className="navbar__link navbar__dropdown-btn">Контакты</button>
          </div>
        </div>
        <div className="navbar__buttons">
          <button className="navbar__button navbar__button--outline">Узнать</button>
          <button className="navbar__button navbar__button--filled">Смотреть</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 