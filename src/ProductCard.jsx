import React from 'react';
import './ProductSection.css';
import { AnimateOnView } from "react-animate-onview";

const ProductCard = ({ title, subtitle, image, price, discountPrice, installmentInfo }) => (
<AnimateOnView animation="zoomIn" duration={0.7} delay={0.3}>
  <div className="product-card">
    <h3>{title}</h3>
    <p>{subtitle}</p>
    <img src={image} alt={title} />
    <div className="price-info">
      <span className="price">{price}</span>
      {discountPrice && <span className="discount-price">{discountPrice}</span>}
    </div>
    <p className="installment-info">{installmentInfo}</p>
    <button className="buy-now-btn">Buy Now</button>
  </div>
  </AnimateOnView>
);

const ProductSection = () => {
  const products = [
    {
      title: "Classic White Card",
      subtitle: "Smart Business Card",
      image: "/src/assets/phone.png",
      price: "LKR 3590",
      discountPrice: "LKR 4490 -20%",
      installmentInfo: "or 3 X LKR 1,196.66 with KOKO or ///ntpay"
    },
    {
      title: "Classic Black Card",
      subtitle: "Smart Business Card",
      image: "/src/assets/phone.png",
      price: "LKR 4990",
      installmentInfo: "or 3 X LKR 1,663.33 with KOKO or ///ntpay"
    },
    {
      title: "Company Card",
      subtitle: "Smart Business Card",
      image: "/src/assets/phone.png",
      price: "LKR 5490",
      installmentInfo: "or 3 X LKR with KOKO or ///ntpay"
    }
  ];

  return (
    
    <section className="product-section">
      <AnimateOnView animation="zoomIn" duration={0.7} delay={0.3}>
      <h2>Grab Your XYGEN.AI Product</h2>
      <p>We have different types of smart products for you.</p>
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      </AnimateOnView>
    </section>
    
  );
};

export default ProductSection;