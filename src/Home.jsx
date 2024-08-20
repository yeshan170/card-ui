import React from "react";
import "./LuxnCard.css";
import { AnimateOnView } from "react-animate-onview";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="luxn-container">
      <Navbar />
      <main>
        <AnimateOnView animation="zoomIn" duration={0.7} delay={0.3}>
          <div className="content">
            <h1>Grab Your Bussiness Card</h1>
            <p>No #1 Smart Business Card in Sri Lanka </p>
            <button>Buy Now</button>
          </div>
        </AnimateOnView>
        <AnimateOnView animation="zoomIn" duration={0.7} delay={0.3}>
          <div className="phone-mockup">
            <img src="/src/assets/phone.png" alt="XYGEN.AI Card on phone" />
          </div>
        </AnimateOnView>
      </main>
    </div>
  );
};

export default Home;
