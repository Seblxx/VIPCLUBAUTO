import React, { useState } from 'react';
import Reveal from '../components/Reveal';
import { FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Footer from '../components/Footer';
import './CareersPage.css';

const CareersPage = () => {
  const [expandedJob, setExpandedJob] = useState(null);

  const toggleJob = (id) => {
    setExpandedJob(prev => (prev === id ? null : id));
  };

  const jobPostings = [
    {
      id: 1,
      image: '/POSTE DISPONIBLE I.png',
      title: 'Technicien en Esthétique Automobile',
      type: 'Temps Plein',
      description: 'Nous recherchons un technicien passionné pour rejoindre notre équipe d\'élite. Vous serez responsable du lavage, polissage, et détaillage complet de véhicules haut de gamme. Formation continue et opportunités d\'avancement garanties.',
      requirements: [
        'Minimum 2 ans d\'expérience en détaillage automobile',
        'Maîtrise des techniques de polissage et correction de peinture',
        'Souci du détail exceptionnel et perfectionniste',
        'Excellente condition physique',
        'Permis de conduire valide',
        'Disponibilité jour/soir/fin de semaine'
      ]
    },
    {
      id: 2,
      image: '/POSTE DISPONIBLE II.png',
      title: 'Spécialiste Lavage & Finition',
      type: 'Temps Plein',
      description: 'Poste clé au sein de notre équipe premium. Vous effectuerez des lavages extérieurs et intérieurs de haute qualité, ainsi que des traitements de finition. Idéal pour candidat motivé cherchant à développer ses compétences dans l\'industrie automobile de luxe.',
      requirements: [
        'Expérience en lavage automobile (1 an minimum)',
        'Connaissance des produits et techniques de nettoyage professionnel',
        'Capacité à travailler efficacement en équipe',
        'Attitude professionnelle et courtoise',
        'Souci de la satisfaction client',
        'Flexibilité horaire'
      ]
    },
    {
      id: 3,
      image: '/MISC III.png',
      title: 'Conseiller Service Client',
      type: 'Temps Plein',
      description: 'Soyez l\'ambassadeur de notre marque de luxe. Vous accueillerez nos clients, conseillerez sur nos services premium, gérerez les réservations et assurerez un service clientèle exceptionnel. Opportunité unique dans un environnement haut de gamme.',
      requirements: [
        'Minimum 2 ans d\'expérience en service client',
        'Excellentes compétences en communication (français/anglais)',
        'Connaissance du milieu automobile (un atout majeur)',
        'Maîtrise des outils informatiques et systèmes de réservation',
        'Sens de l\'organisation et gestion des priorités',
        'Présentation soignée et professionnelle'
      ]
    }
  ];

  return (
    <>
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="careers-hero-overlay"></div>
        <video
          className="careers-hero-bg"
          src="/laveAutoVipClub.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="careers-hero-content">
          <h1 className="careers-hero-title">REJOIGNEZ-NOUS</h1>
          <p className="careers-hero-subtitle">Faites Partie De L'Excellence</p>
          <p className="careers-hero-desc">
            Chez VIP Club Auto, nous recherchons des passionnés d'automobile qui partagent notre engagement envers l'excellence.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="careers-about">
        <div className="container">
          <Reveal>
            <div className="careers-about-content">
              <div className="careers-about-text">
                <h2 className="section-title">À PROPOS DE <span className="gold-text">VIP CLUB AUTO</span></h2>
                <p>VIP Club Auto est un centre d'esthétique automobile de luxe dédié à l'excellence. Fondé par des passionnés d'automobile, nous offrons des services de détaillage, polissage, lavage et traitement haut de gamme pour tous types de véhicules.</p>
                <p>Notre équipe de techniciens certifiés met tout en œuvre pour restituer à votre véhicule son éclat d'origine — ou surpasser vos attentes. Chaque voiture est traitée avec le même soin et la même précision, peu importe le modèle.</p>
              </div>
              <div className="careers-about-image">
                <img src="/MISC IV.png" alt="VIP Club Auto équipe" />
              </div>
            </div>
          </Reveal>
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
                <div
                  className={`job-posting-card${expandedJob === job.id ? ' expanded' : ''}`}
                  onClick={() => toggleJob(job.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && toggleJob(job.id)}
                >
                  <div className="job-image">
                    <img src={job.image} alt={job.title} />
                    <div className="job-badge">{job.type}</div>
                  </div>

                  <div className="job-content">
                    <div className="job-header">
                      <h3 className="job-title">{job.title}</h3>
                      <span className="job-toggle-icon">
                        {expandedJob === job.id ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                    </div>

                    {expandedJob === job.id && (
                      <div className="job-details" onClick={(e) => e.stopPropagation()}>
                        <p className="job-description">{job.description}</p>
                        <div className="job-requirements">
                          <h4>Exigences :</h4>
                          <ul>
                            {job.requirements.map((req, idx) => (
                              <li key={idx}>
                                <FaCheck className="check-icon" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <a
                          href="/#contact"
                          className="btn btn-primary"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Postuler Maintenant
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="careers-cta">
        <div className="container">
          <h2>Prêt À Rejoindre L'Excellence ?</h2>
          <p>Envoyez-nous votre candidature et devenez partie de la famille VIP Club Auto.</p>
          <a href="/rendez-vous" className="btn btn-primary">Contactez-Nous</a>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default CareersPage;
