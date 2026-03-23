import React, { useState } from 'react';
import Reveal from '../components/Reveal';
import './PortfolioPage.css';

const PortfolioPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const portfolioImages = [
    { id: 1, src: '/SHOWCASE II.png', category: 'detailing', title: 'Détaillage Premium' },
    { id: 2, src: '/SHOWCASE III.png', category: 'exterior', title: 'Excellence Extérieure' },
    { id: 3, src: '/SHOWCASE IV.png', category: 'interior', title: 'Intérieur Luxueux' },
    { id: 4, src: '/SHOWCASE V.png', category: 'detailing', title: 'Finition Parfaite' },
    { id: 5, src: '/SHOWCASE VI.png', category: 'ceramic', title: 'Traitement Céramique' },
    { id: 6, src: '/SHOWCASE TIRES.png', category: 'wheels', title: 'Perfection des Roues' },
  ];

  const filteredImages = filter === 'all' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === filter);

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="portfolio-hero-content">
          <h1 className="portfolio-hero-title">NOTRE PORTFOLIO</h1>
          <p className="portfolio-hero-subtitle">Excellence & Perfection Dans Chaque Réalisation</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="portfolio-filters">
        <div className="container">
          <div className="filter-buttons">
            <button 
              className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('all')}
            >
              Tous Les Projets
            </button>
            <button 
              className={filter === 'detailing' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('detailing')}
            >
              Détaillage
            </button>
            <button 
              className={filter === 'exterior' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('exterior')}
            >
              Extérieur
            </button>
            <button 
              className={filter === 'interior' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('interior')}
            >
              Intérieur
            </button>
            <button 
              className={filter === 'ceramic' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('ceramic')}
            >
              Céramique
            </button>
            <button 
              className={filter === 'wheels' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('wheels')}
            >
              Roues & Pneus
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="portfolio-gallery">
        <div className="container">
          <div className="gallery-grid">
            {filteredImages.map((image, index) => (
              <Reveal key={image.id} delay={index * 0.1}>
                <div 
                  className="gallery-item"
                  onClick={() => setSelectedImage(image)}
                >
                  <img src={image.src} alt={image.title} />
                  <div className="gallery-overlay">
                    <h3 className="gallery-title">{image.title}</h3>
                    <span className="gallery-view">Voir Plus →</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="portfolio-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Véhicules Traités</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Satisfaction Client</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5★</div>
              <div className="stat-label">Note Moyenne</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Années d'Expérience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              ×
            </button>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <h3 className="lightbox-title">{selectedImage.title}</h3>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="portfolio-cta">
        <div className="container">
          <h2>Votre Véhicule Mérite Le Meilleur</h2>
          <p>Rejoignez des centaines de clients satisfaits qui nous font confiance.</p>
          <a href="/rendez-vous" className="btn btn-primary">Réserver Un Service</a>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
