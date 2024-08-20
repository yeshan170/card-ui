import React from 'react';
import './FeaturesSection.css';
import { AnimateOnView } from "react-animate-onview";

const FeatureCard = ({ icon, title, description }) => (
  <AnimateOnView animation="zoomIn" duration={0.7} delay={0.3}>
  <div className="feature-card">
    <div className="feature-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
  </AnimateOnView>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: "📡",
      title: "Share with a Tap",
      description: "Tap the XYGEN.AI card on your smartphone and instantly share your XYGEN.AI profile via near-field communication (NFC)."
    },
    {
      icon: "📱",
      title: "No App Required",
      description: "XYGEN.AI profiles are directly viewed through a browser making XYGEN.AI compatible with all smartphones and tablets."
    },
    {
      icon: "🔄",
      title: "Unlimited Sharing",
      description: "With a one-time purchase of a XYGEN.AI card, no monthly fees and enjoy a life full of seamless connections."
    },
    {
      icon: "✏️",
      title: "Update Your Info",
      description: "You can edit your info anytime. Also, you can customize the color of your profile, along with dark mode variations."
    }
  ];

  return (
    
    <section className="features-section">
      <div className="features-grid">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
    
  );
};

export default FeaturesSection;