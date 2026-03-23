import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { useLanguage } from '../App';
import Reveal from './Reveal';
import './Contact.css';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you can integrate with backend or email service)
    console.log('Form submitted:', formData);
    alert(t.contact.form.success);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <h2 className="section-title">
              {t.contact.title} <span className="gold-text">{t.contact.titleGold}</span>
            </h2>
            <p className="section-subtitle">
              {t.contact.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="contact-content">
          <Reveal delay={0.2}>
            <div className="contact-info">
              <h3>{t.contact.info.title}</h3>
              
              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-text">
                  <h4>{t.contact.info.address.title}</h4>
                  <p style={{ whiteSpace: 'pre-line' }}>{t.contact.info.address.content}</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div className="info-text">
                  <h4>{t.contact.info.phone.title}</h4>
                  <p>{t.contact.info.phone.content}</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-text">
                  <h4>{t.contact.info.email.title}</h4>
                  <p>{t.contact.info.email.content}</p>
                </div>
              </div>

              <div className="business-hours">
                <h4>{t.contact.info.hours.title}</h4>
                <p>{t.contact.info.hours.weekdays}</p>
                <p>{t.contact.info.hours.saturday}</p>
                <p>{t.contact.info.hours.sunday}</p>
              </div>

              <div className="social-links">
                <a href="https://www.facebook.com/groups/796253056371700" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/laveautov.i.p/" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://www.tiktok.com/@laveauto.v.i.p.cl?_r=1&_t=ZS-919T4Szjxyu" className="social-icon" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                  <FaTiktok />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder={t.contact.form.name}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder={t.contact.form.email}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder={t.contact.form.phone}
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">{t.contact.form.service.placeholder}</option>
                    <option value="lavage-exterieur">{t.contact.form.service.option1}</option>
                    <option value="detaillage-interieur">{t.contact.form.service.option2}</option>
                    <option value="protection-ceramique">{t.contact.form.service.option3}</option>
                    <option value="polissage">{t.contact.form.service.option4}</option>
                    <option value="antirouille">{t.contact.form.service.option5}</option>
                    <option value="package-complet">{t.contact.form.service.option6}</option>
                  </select>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder={t.contact.form.message}
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  {t.contact.form.submit}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <Reveal delay={0.2}>
            <div className="footer-content">
              <div className="footer-logo">
                <img src="/logo-lave-auto-vip-club-scaled.png" alt="VIP Club Auto" />
                <p>{t.contact.footer.tagline}</p>
              </div>
              <p className="footer-copyright">
                © {new Date().getFullYear()} {t.contact.footer.copyright}
              </p>
            </div>
          </Reveal>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
