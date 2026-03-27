import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import IntroVideo from '../components/IntroVideo';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { useLanguage } from '../App';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './HomePage.css';

const testimonials = [
  { name: 'Marc D.', text: 'Un service impeccable! Ma voiture n\'a jamais été aussi propre. L\'équipe VIP Club est vraiment professionnelle.', stars: 5 },
  { name: 'Sophie L.', text: 'Je recommande à 100%. Le détaillage intérieur est incroyable, on dirait une voiture neuve!', stars: 5 },
  { name: 'Jean-Pierre R.', text: 'Excellent rapport qualité-prix. Le traitement céramique a transformé la peinture de mon véhicule.', stars: 5 },
  { name: 'Isabelle M.', text: 'Service client exceptionnel et résultats au-delà de mes attentes. Je suis cliente fidèle depuis 3 ans.', stars: 5 },
  { name: 'Alexandre B.', text: 'Les meilleurs dans la région! Ils traitent chaque véhicule comme si c\'était le leur.', stars: 5 },
];

const HomePage = () => {
  const { introPlayed, handleIntroComplete } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="home-testimonials">
        <div className="container">
          <h2 className="testimonials-title">CE QUE NOS CLIENTS <span className="gold-text">DISENT</span></h2>
          <div className="testimonials-carousel">
            <button className="carousel-btn prev" onClick={() => setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)}>
              <FaChevronLeft />
            </button>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="testimonial-card"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">{testimonials[currentTestimonial].text}</p>
                <div className="testimonial-stars">{'★'.repeat(testimonials[currentTestimonial].stars)}</div>
                <p className="testimonial-name">— {testimonials[currentTestimonial].name}</p>
              </motion.div>
            </AnimatePresence>
            <button className="carousel-btn next" onClick={() => setCurrentTestimonial(prev => (prev + 1) % testimonials.length)}>
              <FaChevronRight />
            </button>
          </div>
          <div className="carousel-dots">
            {testimonials.map((_, i) => (
              <button key={i} className={`dot ${i === currentTestimonial ? 'active' : ''}`} onClick={() => setCurrentTestimonial(i)} />
            ))}
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
              <Link to="/rendez-vous" className="btn btn-primary">Prendre Rendez-Vous</Link>
              <a href="/services" className="btn btn-secondary">Voir Les Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
