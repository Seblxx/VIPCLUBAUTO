import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa6';
import Reveal from './Reveal';
import { useLanguage } from '../App';
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <Reveal delay={0.2}>
          <div className="footer-content">
            <div className="footer-logo">
              <img src="/logo-lave-auto-vip-club-scaled.png" alt="VIP Club Auto" />
              <p>{t.contact.footer.tagline}</p>
              <div className="footer-socials">
                <a
                  href="https://www.facebook.com/groups/796253056371700"
                  className="footer-social-link facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/laveautov.i.p/?igsh=MTBrbDNiNW9pb2M2Mg%3D%3D#"
                  className="footer-social-link instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.tiktok.com/@laveauto.v.i.p.cl?_r=1&_t=ZS-919T4Szjxyu"
                  className="footer-social-link tiktok"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>
            <p className="footer-copyright">
              © {new Date().getFullYear()} {t.contact.footer.copyright}
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
