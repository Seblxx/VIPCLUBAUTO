import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
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
  const [menuOpen, setMenuOpen] = useState(false);

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

  const replayIntro = () => {
    setIntroPlayed(false);
    sessionStorage.removeItem('introPlayed');
  };

  const handleMenuToggle = () => {
    setMenuOpen(prev => !prev);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, introPlayed, handleIntroComplete, replayIntro }}>
      <Router>
        <ScrollToTop />
        <div className="App">
          <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
              <Link to="/" className="nav-logo" onClick={() => { replayIntro(); handleMenuClose(); }}>
                <img src="/logo-lave-auto-vip-club-scaled.png" alt="VIP Club Auto" />
              </Link>
              <ul className="nav-menu-desktop">
                <li><Link to="/services">{t.nav.services}</Link></li>
                <li><Link to="/portfolio">{t.nav.portfolio}</Link></li>
                <li><Link to="/careers">{t.nav.careers}</Link></li>
                <li><Link to="/boutique">{t.nav.contact}</Link></li>
                <li>
                  <Link to="/rendez-vous" className="nav-book-btn">
                    {language === 'fr' ? 'Réserver' : 'Book'}
                  </Link>
                </li>
                <li>
                  <button className="language-toggle" onClick={toggleLanguage}>
                    {language === 'fr' ? 'EN' : 'FR'}
                  </button>
                </li>
              </ul>
              <button className="burger-menu" aria-label="Open menu" aria-expanded={menuOpen} onClick={handleMenuToggle}>
                <span className="burger-bar"></span>
                <span className="burger-bar"></span>
                <span className="burger-bar"></span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Overlay — outside <nav> so position:fixed isn't affected by navbar's transform */}
          <div className={`mobile-nav-overlay${menuOpen ? ' active' : ''}`} onClick={handleMenuClose}>
            <ul className="mobile-nav-list" onClick={e => e.stopPropagation()}>
              <li><Link to="/services" onClick={handleMenuClose}>{t.nav.services}</Link></li>
              <li><Link to="/portfolio" onClick={handleMenuClose}>{t.nav.portfolio}</Link></li>
              <li><Link to="/careers" onClick={handleMenuClose}>{t.nav.careers}</Link></li>
              <li><Link to="/boutique" onClick={handleMenuClose}>{t.nav.contact}</Link></li>
              <li>
                <Link to="/rendez-vous" className="nav-book-btn" onClick={handleMenuClose}>
                  {language === 'fr' ? 'Réserver' : 'Book'}
                </Link>
              </li>
              <li>
                <button className="language-toggle" onClick={() => { toggleLanguage(); handleMenuClose(); }}>
                  {language === 'fr' ? 'EN' : 'FR'}
                </button>
              </li>
            </ul>
          </div>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/boutique" element={<ContactPage />} />
            <Route path="/rendez-vous" element={<BookingPage />} />
          </Routes>
        </div>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
