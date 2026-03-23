import React from 'react';
// import { FaCarSide, FaStar, FaShieldAlt, FaSprayCan, FaGem, FaMagic } from 'react-icons/fa';
import { useLanguage } from '../App';
import Reveal from './Reveal';
import './Services.css';

const Services = () => {
  const { t } = useLanguage();
  
  const services = t.services.list;

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
          {services.map((service, index) => (
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
      </div>
    </section>
  );
};

export default Services;
