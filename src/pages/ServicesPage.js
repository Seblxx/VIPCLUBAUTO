import React from 'react';
import { useLanguage } from '../App';
import Services from '../components/Services';
import './ServicesPage.css';

const ServicesPage = () => {
  const { t } = useLanguage();
  return (
    <div className="services-page">
      {/* Hero Header */}
      <section className="services-hero">
        <div className="services-hero-overlay"></div>
        <img src="/MISC TIRES.png" alt="Services VIP" className="services-hero-bg" />
        <div className="services-hero-content">
          <h1 className="services-hero-title">{t.services.title} {t.services.titleGold}</h1>
          <p className="services-hero-subtitle">{t.services.subtitle}</p>
        </div>
      </section>

      {/* Services Component */}
      <Services />

      {/* Premium Process Section */}
      <section className="premium-process">
        <div className="container">
          <h2 className="process-title">{t.services.processTitle || 'NOTRE PROCESSUS'} <span className="gold-text">VIP</span></h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>{t.services.processStep1Title || 'Inspection Complète'}</h3>
              <p>{t.services.processStep1Desc || 'Évaluation détaillée de votre véhicule pour identifier les besoins spécifiques.'}</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>{t.services.processStep2Title || 'Traitement Personnalisé'}</h3>
              <p>{t.services.processStep2Desc || 'Application de nos techniques premium adaptées à votre véhicule.'}</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>{t.services.processStep3Title || 'Contrôle Qualité'}</h3>
              <p>{t.services.processStep3Desc || 'Vérification méticuleuse pour garantir une finition parfaite.'}</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>{t.services.processStep4Title || 'Livraison Excellence'}</h3>
              <p>{t.services.processStep4Desc || 'Présentation de votre véhicule dans un état immaculé.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-benefits">
        <div className="container">
          <div className="benefits-content">
            <div className="benefits-text">
              <h2>{t.services.benefitsTitle || 'POURQUOI CHOISIR VIP CLUB AUTO ?'}</h2>
              <ul className="benefits-list">
                <li>{t.services.benefit1 || '✓ Produits professionnels de qualité supérieure'}</li>
                <li>{t.services.benefit2 || '✓ Équipe certifiée et expérimentée'}</li>
                <li>{t.services.benefit3 || '✓ Techniques de pointe respectant votre véhicule'}</li>
                <li>{t.services.benefit4 || '✓ Satisfaction garantie à 100%'}</li>
                <li>{t.services.benefit5 || '✓ Service rapide sans compromis sur la qualité'}</li>
                <li>{t.services.benefit6 || '✓ Protection longue durée de votre investissement'}</li>
              </ul>
              <a href="/rendez-vous" className="btn btn-primary">{t.services.benefitsCta || 'Réserver Maintenant'}</a>
            </div>
            <div className="benefits-image">
              <img src="/MISC IV.png" alt="Excellence VIP Club" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
