import React from 'react';
import { FaBriefcase, FaClock, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import { useLanguage } from '../App';
import Reveal from './Reveal';
import './Jobs.css';

const Jobs = () => {
  const { t } = useLanguage();
  
  const positions = [
    t.jobs.position1,
    t.jobs.position2,
    t.jobs.position3
  ];

  const benefits = [
    { icon: <FaBriefcase />, text: t.jobs.benefits.salary },
    { icon: <FaClock />, text: t.jobs.benefits.schedule },
    { icon: <FaMapMarkerAlt />, text: t.jobs.benefits.environment },
    { icon: <FaUsers />, text: t.jobs.benefits.team }
  ];

  return (
    <section id="jobs" className="jobs">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <h2 className="section-title">
              {t.jobs.title} <span className="gold-text">{t.jobs.titleGold}</span>
            </h2>
            <p className="section-subtitle">
              {t.jobs.subtitle}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <div className="benefit-icon">{benefit.icon}</div>
                <p>{benefit.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="jobs-list">
          {positions.map((position, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="job-card">
                <div className="job-header">
                  <h3 className="job-title">{position.title}</h3>
                  <div className="job-meta">
                    <span className="job-type">{position.type}</span>
                    <span className="job-location">
                      <FaMapMarkerAlt /> {position.location}
                    </span>
                  </div>
                </div>
                <p className="job-description">{position.description}</p>
                <div className="job-requirements">
                  <h4>{position.requirements.title || t.jobs.position1.requirements.title}</h4>
                  <ul>
                    {position.requirements.list.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
                <button className="job-apply-btn">{t.jobs.apply}</button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="jobs-cta">
            <h3>{t.jobs.cta.title}</h3>
            <p>{t.jobs.cta.subtitle}</p>
            <a href="/rendez-vous" className="btn btn-primary">{t.jobs.cta.button}</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Jobs;
