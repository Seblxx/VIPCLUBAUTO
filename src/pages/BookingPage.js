import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { useLanguage } from '../App';
import Reveal from '../components/Reveal';
import './BookingPage.css';

const BookingPage = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormStatus('success');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setTimeout(() => setFormStatus(null), 4000);
  };

  return (
    <div className="booking-page">
      <section className="booking-hero">
        <div className="container">
          <Reveal>
            <div className="contact-header">
              <span className="contact-label">CONTACT</span>
              <h2 className="contact-title">{t.contact.title} <span className="gold-text">{t.contact.titleGold}</span></h2>
              <p className="contact-subtitle">{t.contact.subtitle}</p>
            </div>
          </Reveal>

          <div className="contact-layout">
            <Reveal delay={0.1}>
              <div className="contact-details">
                <div className="detail-card">
                  <div className="detail-icon"><FaMapMarkerAlt /></div>
                  <div className="detail-info">
                    <h4>{t.contact.info.address.title}</h4>
                    <p>{t.contact.info.address.content.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</p>
                  </div>
                </div>

                <div className="detail-card">
                  <div className="detail-icon"><FaPhone /></div>
                  <div className="detail-info">
                    <h4>{t.contact.info.phone.title}</h4>
                    <p>{t.contact.info.phone.content}</p>
                  </div>
                </div>

                <div className="detail-card">
                  <div className="detail-icon"><FaEnvelope /></div>
                  <div className="detail-info">
                    <h4>{t.contact.info.email.title}</h4>
                    <p>{t.contact.info.email.content}</p>
                  </div>
                </div>

                <div className="detail-card">
                  <div className="detail-icon"><FaClock /></div>
                  <div className="detail-info">
                    <h4>{t.contact.info.hours.title}</h4>
                    <p>{t.contact.info.hours.weekdays}</p>
                    <p>{t.contact.info.hours.saturday}</p>
                    <p>{t.contact.info.hours.sunday}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-field">
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
                  <div className="form-field">
                    <input
                      type="email"
                      name="email"
                      placeholder={t.contact.form.email}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <input
                      type="tel"
                      name="phone"
                      placeholder={t.contact.form.phone}
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-field">
                  <select name="service" value={formData.service} onChange={handleChange} required>
                    <option value="">{t.contact.form.service.placeholder}</option>
                    <option value="exterior">{t.contact.form.service.option1}</option>
                    <option value="interior">{t.contact.form.service.option2}</option>
                    <option value="ceramic">{t.contact.form.service.option3}</option>
                    <option value="polish">{t.contact.form.service.option4}</option>
                    <option value="rust">{t.contact.form.service.option5}</option>
                    <option value="complete">{t.contact.form.service.option6}</option>
                  </select>
                </div>
                <div className="form-field">
                  <textarea
                    name="message"
                    placeholder={t.contact.form.message}
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                  />
                </div>
                <button type="submit" className="form-submit">{t.contact.form.submit}</button>
                {formStatus === 'success' && (
                  <p className="form-success">{t.contact.form.success}</p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
