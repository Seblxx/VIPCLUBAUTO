import React from 'react';
import Reveal from '../components/Reveal';
import { FaCheck, FaClock, FaMoneyBillWave, FaUsers, FaAward, FaGraduationCap } from 'react-icons/fa';
import './CareersPage.css';

const CareersPage = () => {

  const jobPostings = [
    {
      id: 1,
      image: '/POSTE DISPONIBLE I.png',
      title: 'Technicien en Esthétique Automobile',
      type: 'Temps Plein',
      salary: '45,000$ - 65,000$ / an',
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
      salary: '38,000$ - 52,000$ / an',
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
      salary: '42,000$ - 58,000$ / an + Commission',
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
                    
                    <a href="/#contact" className="btn btn-primary">Postuler Maintenant</a>
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
          <a href="/#contact" className="btn btn-primary">Contactez-Nous</a>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
