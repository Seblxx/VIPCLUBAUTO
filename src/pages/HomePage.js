import React, { useState } from 'react';
import IntroVideo from '../components/IntroVideo';
import Hero from '../components/Hero';
import './HomePage.css';

const HomePage = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  if (showIntro) {
    return <IntroVideo onComplete={handleIntroComplete} />;
  }

  return (
    <div className="home-page">
      <Hero />
      
      {/* Quick Overview Section */}
      <section className="home-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-card">
              <div className="card-number">01</div>
              <h3>Services Premium</h3>
              <p>Du lavage extérieur au traitement céramique, découvrez nos services d'exception.</p>
              <a href="/services" className="card-link">Découvrir →</a>
            </div>
            
            <div className="overview-card">
              <div className="card-number">02</div>
              <h3>Notre Portfolio</h3>
              <p>Explorez nos réalisations et laissez-vous inspirer par notre excellence.</p>
              <a href="/portfolio" className="card-link">Voir le portfolio →</a>
            </div>
            
            <div className="overview-card">
              <div className="card-number">03</div>
              <h3>Rejoignez-Nous</h3>
              <p>Faites partie d'une équipe passionnée par l'excellence automobile.</p>
              <a href="/careers" className="card-link">Postes disponibles →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Images Section */}
      <section className="home-featured">
        <div className="container">
          <h2 className="featured-title">L'EXCELLENCE EN <span className="gold-text">IMAGES</span></h2>
          <div className="featured-grid">
            <div className="featured-item large">
              <img src="/SHOWCASE II.png" alt="Excellence VIP" />
              <div className="featured-overlay">
                <span>Détaillage Premium</span>
              </div>
            </div>
            <div className="featured-item">
              <img src="/SHOWCASE TIRES.png" alt="Détail Pneus" />
              <div className="featured-overlay">
                <span>Perfection Dans Les Détails</span>
              </div>
            </div>
            <div className="featured-item">
              <img src="/MISC III.png" alt="Excellence" />
              <div className="featured-overlay">
                <span>Innovation & Qualité</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Prêt Pour L'Expérience VIP ?</h2>
            <p>Réservez dès maintenant et découvrez ce que signifie vraiment le luxe automobile.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Prendre Rendez-Vous</a>
              <a href="/services" className="btn btn-secondary">Voir Les Services</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
