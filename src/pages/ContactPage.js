import React from 'react';
import Footer from '../components/Footer';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <section className="boutique-hero">
        <div className="boutique-hero-overlay"></div>
        <video
          className="boutique-hero-bg"
          src="/laveAutoVipClub.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="boutique-hero-content">
          <h1 className="boutique-hero-title">BOUTIQUE</h1>
          <div className="boutique-hero-divider"></div>
          <p className="boutique-hero-subtitle">Bientôt Disponible</p>
          <p className="boutique-hero-text">Notre boutique en ligne arrive prochainement. Restez à l'affût!</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
