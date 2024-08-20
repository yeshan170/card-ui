import React from 'react';
import './SliderSection.css';

const SliderSection = () => {
  const logos = [
    { name: 'Athlan', src: '/src/assets/realty.png' },
    { name: 'Infinity', src: '/src/assets/tower.png' },
    { name: 'Tel-com Distributors', src: '/src/assets/equinix.png' },
    { name: 'CafeYC', src: '/src/assets/prologis.png' },
    { name: 'Chandranee\'s Hardware', src: '/src/assets/realty.png' },
    { name: 'IDM Ceylon', src: '/src/assets/tower.png' },
    { name: 'JJ', src: '/src/assets/equinix.png' },
    { name: 'Singer', src: '/src/assets/prologis.png' },
    // Add more logos as needed
  ];

  return (
    <section className="slider-section">
      <h2>10,000+ professionals and corporates have connected with XYGEN.AI to experience the future of networking.</h2>
      <div className="logo-slider">
        <div className="slider-track">
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="slide">
              <img src={logo.src} alt={logo.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SliderSection;