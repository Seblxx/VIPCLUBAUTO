import React from 'react';
import Services from '../components/Services';
import './ServicesPage.css';

const ServicesPage = () => {
  return (
    <div className="services-page">
      {/* Hero Header */}
      <section className="services-hero">
        <div className="services-hero-overlay"></div>
        <img src="/MISC TIRES.png" alt="Services VIP" className="services-hero-bg" />
        <div className="services-hero-content">
          <h1 className="services-hero-title">NOS SERVICES</h1>
          <p className="services-hero-subtitle">L'Excellence Automobile À Chaque Détail</p>
        </div>
      </section>

      {/* Services Component */}
      <Services />

      {/* Premium Process Section */}
      <section className="premium-process">
        <div className="container">
          <h2 className="process-title">NOTRE PROCESSUS <span className="gold-text">VIP</span></h2>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Inspection Complète</h3>
              <p>Évaluation détaillée de votre véhicule pour identifier les besoins spécifiques.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Traitement Personnalisé</h3>
              <p>Application de nos techniques premium adaptées à votre véhicule.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Contrôle Qualité</h3>
              <p>Vérification méticuleuse pour garantir une finition parfaite.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Livraison Excellence</h3>
              <p>Présentation de votre véhicule dans un état immaculé.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-benefits">
        <div className="container">
          <div className="benefits-content">
            <div className="benefits-text">
              <h2>POURQUOI CHOISIR VIP CLUB AUTO ?</h2>
              <ul className="benefits-list">
                <li>✓ Produits professionnels de qualité supérieure</li>
                <li>✓ Équipe certifiée et expérimentée</li>
                <li>✓ Techniques de pointe respectant votre véhicule</li>
                <li>✓ Satisfaction garantie à 100%</li>
                <li>✓ Service rapide sans compromis sur la qualité</li>
                <li>✓ Protection longue durée de votre investissement</li>
              </ul>
              <a href="/contact" className="btn btn-primary">Réserver Maintenant</a>
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
