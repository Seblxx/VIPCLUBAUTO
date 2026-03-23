import React, { useState } from 'react';
import { useLanguage } from '../App';
import Reveal from './Reveal';
import './Showcase.css';

const Showcase = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  const showcaseImages = [
    { src: '/643421161_122129564841048401_6818923463134913128_n.png', alt: 'Lavage Premium 1' },
    { src: '/643762227_122129564847048401_6012488235689645853_n.png', alt: 'Lavage Premium 2' },
    { src: '/649760861_122131854087048401_6749818991329786200_n.png', alt: 'Détaillage Intérieur' },
    { src: '/652388368_122132329935048401_1223736003010382150_n.png', alt: 'Protection Céramique' },
    { src: '/652418137_122131854135048401_3271470150217207619_n.png', alt: 'Résultat Final 1' },
    { src: '/652863035_122132329965048401_6660543913803230803_n.png', alt: 'Résultat Final 2' },
    { src: '/653109410_122132335383048401_7891155376377544426_n.png', alt: 'Polissage Expert' },
    { src: '/653710018_122132329977048401_7138564019951451082_n.png', alt: 'Excellence VIP 1' },
    { src: '/653710554_122132335431048401_7640467785834831312_n.png', alt: 'Excellence VIP 2' },
    { src: '/653710653_122132332611048401_746867769634770448_n.png', alt: 'Excellence VIP 3' },
    { src: '/654306563_122132335401048401_4214917198816833864_n.png', alt: 'Finition Parfaite 1' },
    { src: '/655291024_122132332593048401_8046246701307514787_n.png', alt: 'Finition Parfaite 2' },
  ];

  return (
    <section id="showcase" className="showcase">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <h2 className="section-title">
              {t.showcase.title} <span className="gold-text">{t.showcase.titleGold}</span>
            </h2>
            <p className="section-subtitle">
              {t.showcase.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="showcase-grid">
          {showcaseImages.map((image, index) => (
            <Reveal key={index} delay={index * 0.05}>
              <div 
                className="showcase-item"
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.src} alt={image.alt} />
                <div className="showcase-overlay">
                  <span className="showcase-text">{image.alt}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="showcase-cta">
            <h3>{t.showcase.cta.title}</h3>
            <a href="#contact" className="btn btn-primary">{t.showcase.cta.button}</a>
          </div>
        </Reveal>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content">
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Showcase;
