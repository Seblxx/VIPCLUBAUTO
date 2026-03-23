import React from 'react';
import { Link } from 'react-router-dom';
import IntroVideo from '../components/IntroVideo';
import Hero from '../components/Hero';
import { useLanguage } from '../App';
import './HomePage.css';

const HomePage = () => {
  const { introPlayed, handleIntroComplete } = useLanguage();

  if (!introPlayed) {
    return <IntroVideo onComplete={handleIntroComplete} />;
  }

  return (
    <div className="home-page">
      <Hero />
      
      {/* Quick Overview Section */}
      <section className="home-overview">
        <div className="container">
          <div className="overview-grid">
            <Link to="/services" className="overview-link">
              <h2>SERVICES</h2>
            </Link>
            
            <Link to="/portfolio" className="overview-link">
              <h2>PORTFOLIO</h2>
            </Link>
            
            <Link to="/careers" className="overview-link">
              <h2>CARRIÈRES</h2>
            </Link>
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
