import React, { useState } from 'react';
// import { FaCarSide, FaStar, FaShieldAlt, FaSprayCan, FaGem, FaMagic } from 'react-icons/fa';
import { useLanguage } from '../App';
import Reveal from './Reveal';
import './Services.css';

const Services = () => {
  const { t } = useLanguage();
  
  const services = t.services.list;

  // Show only a few services by default
  const DEFAULT_VISIBLE = 3;
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, DEFAULT_VISIBLE);

  return (
    <section id="services" className="services">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <h2 className="section-title">
              {t.services.title} <span className="gold-text">{t.services.titleGold}</span>
            </h2>
            <p className="section-subtitle">
              {t.services.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="services-grid">
          {visibleServices.map((service, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <p className="service-price">{service.price}</p>
                <button className="service-btn">{t.services.book}</button>
              </div>
            </Reveal>
          ))}
        </div>

        {services.length > DEFAULT_VISIBLE && (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button
              className="service-btn"
              style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? t.services.showLess || 'Voir moins' : t.services.showMore || 'Voir plus'}
            </button>
          </div>
        )
        }
      </div>
    </section>
  );
};

export default Services;
