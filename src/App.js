import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import { translations } from './translations';
import './App.css';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// Create Language Context
export const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState('fr'); // Default to French
  const [introPlayed, setIntroPlayed] = useState(
    sessionStorage.getItem('introPlayed') === 'true'
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  const t = translations[language];
  
  const handleIntroComplete = () => {
    setIntroPlayed(true);
    sessionStorage.setItem('introPlayed', 'true');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, introPlayed, handleIntroComplete }}>
      <Router>
        <ScrollToTop />
        <div className="App">
          <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
              <Link to="/" className="nav-logo">
                <img src="/logo-lave-auto-vip-club-scaled.png" alt="VIP Club Auto" />
              </Link>
              <ul className="nav-menu">
                <li><Link to="/services">{t.nav.services}</Link></li>
                <li><Link to="/portfolio">{t.nav.portfolio}</Link></li>
                <li><Link to="/careers">{t.nav.careers}</Link></li>
                <li><Link to="/contact">{t.nav.contact}</Link></li>
                <li>
                  <Link to="/contact" className="nav-book-btn">
                    {language === 'fr' ? 'Réserver' : 'Book'}
                  </Link>
                </li>
                <li>
                  <button className="language-toggle" onClick={toggleLanguage}>
                    {language === 'fr' ? 'EN' : 'FR'}
                  </button>
                </li>
              </ul>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
