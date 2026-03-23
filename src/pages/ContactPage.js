import React from 'react';
import Contact from '../components/Contact';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">CONTACTEZ-NOUS</h1>
          <p className="contact-hero-subtitle">Nous Sommes À Votre Service</p>
        </div>
      </section>

      {/* Contact Component */}
      <Contact />
    </div>
  );
};

export default ContactPage;
