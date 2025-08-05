import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Map.scss';

interface MapProps {
  address: string;
}

declare global {
  interface Window {
    L: any;
  }
}

const Map: React.FC<MapProps> = ({ address }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Определяем мобильное устройство
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current || !window.L) return;

      // Координаты для Астаны, район Есиль, Проспект Мангилик Ел
      const defaultPosition = [51.1801, 71.4460];

      // Настройки карты в зависимости от устройства
      const mapOptions = {
        center: defaultPosition,
        zoom: isMobile ? 13 : 15, // Уменьшаем зум на мобильных для лучшего обзора
        zoomControl: true,
        scrollWheelZoom: !isMobile, // Отключаем scroll wheel zoom на мобильных
        dragging: true,
        touchZoom: true,
        doubleClickZoom: !isMobile, // Отключаем double click zoom на мобильных
        boxZoom: !isMobile, // Отключаем box zoom на мобильных
        keyboard: !isMobile, // Отключаем keyboard на мобильных
        tap: true,
        tapTolerance: 15,
        attributionControl: false // Отключаем attribution для чистоты
      };

      // Создаем карту
      const map = window.L.map(mapRef.current, mapOptions);

      // Добавляем слой CartoDB (без флага Украины)
      window.L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '© CartoDB',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(map);

      mapInstanceRef.current = map;

      // Создаем кастомную иконку маркера с адаптивным размером
      const markerSize = isMobile ? 28 : 40;
      const iconSize = isMobile ? 16 : 20;
      
      const customIcon = window.L.divIcon({
        html: `
          <div style="
            width: ${markerSize}px; 
            height: ${markerSize}px; 
            background: #495057; 
            border: 3px solid #ffffff; 
            border-radius: 50%; 
            display: flex; 
            align-items: center; 
            justify-content: center;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          ">
            <svg width="${iconSize}" height="${iconSize}" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L15.09 8.26L22 9L17 14.74L18.18 21.02L12 17.77L7.82 20.02L7 14.74L2 9L8.91 8.26L12 2Z" fill="#ffffff"/>
            </svg>
          </div>
        `,
        className: 'custom-marker',
        iconSize: [markerSize, markerSize],
        iconAnchor: [markerSize / 2, markerSize],
        popupAnchor: [0, -markerSize]
      });

      // Создаем маркер
      const marker = window.L.marker(defaultPosition, {
        icon: customIcon,
        title: 'Alatau Packaging'
      }).addTo(map);

      markerRef.current = marker;

      // Создаем информационное окно с адаптивным контентом
      const popupContent = `
        <div style="padding: ${isMobile ? '6px' : '10px'}; max-width: ${isMobile ? '180px' : '250px'};">
          <h3 style="margin: 0 0 ${isMobile ? '4px' : '8px'} 0; color: #343a40; font-size: ${isMobile ? '12px' : '16px'}; font-weight: 600;">
            Alatau Packaging
          </h3>
          <p style="margin: 0; color: #495057; font-size: ${isMobile ? '10px' : '14px'}; line-height: 1.3;">
            ${address}
          </p>
          <p style="margin: ${isMobile ? '4px' : '8px'} 0 0 0; color: #6c757d; font-size: ${isMobile ? '8px' : '12px'};">
            Главный офис и производство
          </p>
        </div>
      `;

      const popup = window.L.popup({
        className: 'custom-popup',
        closeButton: true,
        autoClose: false,
        closeOnClick: false,
        maxWidth: isMobile ? 200 : 280,
        maxHeight: isMobile ? 120 : 200
      }).setContent(popupContent);

      // Открываем информационное окно при клике на маркер
      marker.bindPopup(popup);

      // Анимация появления карты
      gsap.fromTo(mapRef.current, 
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
      );

      // На мобильных устройствах центрируем карту после загрузки
      if (isMobile) {
        setTimeout(() => {
          map.invalidateSize();
        }, 100);
      }
    };

    // Проверяем, загружен ли Leaflet
    if (window.L) {
      initMap();
    } else {
      // Если Leaflet еще не загружен, ждем
      const checkLeaflet = setInterval(() => {
        if (window.L) {
          clearInterval(checkLeaflet);
          initMap();
        }
      }, 100);
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }
    };
  }, [address, isMobile]);

  return (
    <div className="map-component">
      <div ref={mapRef} className="map-container" />
    </div>
  );
};

export default Map; 