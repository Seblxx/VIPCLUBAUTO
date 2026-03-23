import React from 'react';
import { useLanguage } from '../App';
import Reveal from '../components/Reveal';
import { FaCheck, FaClock, FaMoneyBillWave, FaUsers, FaAward, FaGraduationCap } from 'react-icons/fa';
import './CareersPage.css';

const CareersPage = () => {
  const { t } = useLanguage();

  const jobPostings = [
    {
      id: 1,
      image: '/POSTE DISPONIBLE I.png',
      title: t.jobs.positions.position1.title,
      type: 'Temps Plein',
      salary: '45,000$ - 60,000$ / an',
      description: t.jobs.positions.position1.description,
      requirements: [
        'Expérience en détaillage automobile',
        'Souci du détail et perfectionniste',
        'Bonne condition physique',
        'Disponibilité flexible'
      ]
    },
    {
      id: 2,
      image: '/POSTE DISPONIBLE II.png',
      title: t.jobs.positions.position2.title,
      type: 'Temps Plein',
      salary: '35,000$ - 45,000$ / an',
      description: t.jobs.positions.position2.description,
      requirements: [
        'Passion pour l\'automobile',
        'Excellente éthique de travail',
        'Capacité d\'apprentissage rapide',
        'Orientation service client'
      ]
    },
    {
      id: 3,
      image: '/MISC III.png',
      title: t.jobs.positions.position3.title,
      type: 'Temps Plein',
      salary: '40,000$ - 55,000$ / an',
      description: t.jobs.positions.position3.description,
      requirements: [
        'Expérience service client',
        'Excellentes compétences communication',
        'Connaissance automobile un atout',
        'Maîtrise informatique'
      ]
    }
  ];

  const benefits = [
    { icon: <FaMoneyBillWave />, title: 'Salaire Compétitif', desc: 'Rémunération attractive avec bonus' },
    { icon: <FaClock />, title: 'Horaires Flexibles', desc: 'Équilibre travail-vie personnelle' },
    { icon: <FaGraduationCap />, title: 'Formation Continue', desc: 'Développement professionnel constant' },
    { icon: <FaUsers />, title: 'Équipe Dynamique', desc: 'Environnement collaboratif' },
    { icon: <FaAward />, title: 'Reconnaissance', desc: 'Valorisation de l\'excellence' },
    { icon: <FaCheck />, title: 'Avantages Sociaux', desc: 'Package complet d\'avantages' }
  ];

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="careers-hero-content">
          <h1 className="careers-hero-title">REJOIGNEZ-NOUS</h1>
          <p className="careers-hero-subtitle">Faites Partie De L'Excellence</p>
          <p className="careers-hero-desc">
            Chez VIP Club Auto, nous recherchons des passionnés d'automobile qui partagent notre engagement envers l'excellence.
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="why-join">
        <div className="container">
          <Reveal>
            <h2 className="section-title">POURQUOI <span className="gold-text">NOUS REJOINDRE</span></h2>
          </Reveal>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="benefit-card">
                  <div className="benefit-icon">{benefit.icon}</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Job Postings Section */}
      <section className="job-postings">
        <div className="container">
          <Reveal>
            <h2 className="section-title">POSTES <span className="gold-text">DISPONIBLES</span></h2>
          </Reveal>

          <div className="jobs-list">
            {jobPostings.map((job, index) => (
              <Reveal key={job.id} delay={index * 0.2}>
                <div className="job-posting-card">
                  <div className="job-image">
                    <img src={job.image} alt={job.title} />
                    <div className="job-badge">{job.type}</div>
                  </div>
                  
                  <div className="job-content">
                    <h3 className="job-title">{job.title}</h3>
                    <div className="job-salary">{job.salary}</div>
                    <p className="job-description">{job.description}</p>
                    
                    <div className="job-requirements">
                      <h4>Exigences:</h4>
                      <ul>
                        {job.requirements.map((req, idx) => (
                          <li key={idx}>
                            <FaCheck className="check-icon" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a href="/contact" className="btn btn-primary">Postuler Maintenant</a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="company-culture">
        <div className="container">
          <div className="culture-content">
            <div className="culture-text">
              <h2>NOTRE CULTURE D'ENTREPRISE</h2>
              <p>
                Chez VIP Club Auto, nous croyons que notre succès repose sur notre équipe exceptionnelle. 
                Nous cultivons un environnement où la passion pour l'automobile rencontre l'excellence professionnelle.
              </p>
              <p>
                Nous investissons dans notre équipe avec des formations continues, des opportunités de croissance, 
                et un environnement de travail qui encourage l'innovation et la créativité.
              </p>
              <div className="culture-stats">
                <div className="culture-stat">
                  <div className="stat-num">15+</div>
                  <div className="stat-label">Employés Passionnés</div>
                </div>
                <div className="culture-stat">
                  <div className="stat-num">4.9/5</div>
                  <div className="stat-label">Satisfaction Équipe</div>
                </div>
                <div className="culture-stat">
                  <div className="stat-num">100%</div>
                  <div className="stat-label">Formation Continue</div>
                </div>
              </div>
            </div>
            <div className="culture-image">
              <img src="/MISC IV.png" alt="Notre Équipe" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="careers-cta">
        <div className="container">
          <h2>Prêt À Rejoindre L'Excellence ?</h2>
          <p>Envoyez-nous votre candidature et devenez partie de la famille VIP Club Auto.</p>
          <a href="/contact" className="btn btn-primary">Contactez-Nous</a>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
