import React from 'react';
import { useLanguage } from '../App';
import Services from '../components/Services';
import Footer from '../components/Footer';
import './ServicesPage.css';

const ServicesPage = () => {
  const { t } = useLanguage();
  return (
    <>
    <div className="services-page">
      {/* Hero Header */}
      <section className="services-hero">
        <div className="services-hero-overlay"></div>
        <video
          className="services-hero-bg"
          src="/laveAutoVipClub.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="services-hero-content">
          <h1 className="services-hero-title">{t.services.subtitle}</h1>
        </div>
      </section>

      {/* Services Component */}
      <Services />

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
    <Footer />
    </>
  );
};

export default ServicesPage;
