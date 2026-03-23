import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../App';
import './Hero.css';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/laveAutoVipClub.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>
      
      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {t.hero.welcome}<br />
          {t.hero.experience} <span className="gold-text">{t.hero.vip}</span>
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          {t.hero.subtitle}
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
