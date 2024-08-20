import React, { useState } from "react";
import "./CardCreationPage.css";
import Navbar from "./Navbar";
import { AnimateOnView } from "react-animate-onview";
import Footer from './Footer'

const LuxnCard = () => {
  const [cardType, setCardType] = useState("CLASSIC");
  const [color, setColor] = useState("white");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [referralCode, setReferralCode] = useState("");

  return (
    <>
      <Navbar />
      <AnimateOnView animation="zoomIn" duration={0.7} delay={0.3}>
        <div className="luxn-card-container">
          <h1>Design And ORDER Your XYGEN.AI Card Now</h1>
          <AnimateOnView animation="fadeInFromBottom" delay={1}>
            <div className="card-preview">
              <div className={`card ${color}`}>
                <p className="card-name">{name || "YOUR NAME"}</p>
                <p className="card-role-company">
                  {role}
                  {company && ` | ${company}`}
                </p>
                <p className="card-logo">XYGEN.AI</p>
              </div>
            </div>
          </AnimateOnView>

          <div className="card-details">
            <p className="card-price">Classic White Card</p>
            <p className="card-price-amount">LKR 3590</p>
            <p className="payment-option">or 3 X LKR 1,196.66 with koko</p>
            <p className="payment-option">or 3 X LKR 1,196.66 with intpay</p>

            <div className="card-options">
              <p>Card Type:</p>
              <div className="card-type-buttons">
                <button
                  className={cardType === "CLASSIC" ? "active" : ""}
                  onClick={() => setCardType("CLASSIC")}
                >
                  CLASSIC
                </button>
                <button
                  className={cardType === "COMPANY" ? "active" : ""}
                  onClick={() => setCardType("COMPANY")}
                >
                  COMPANY
                </button>
              </div>
            </div>

            <div className="color-options">
              <p>Color:</p>
              <div className="color-buttons">
                <button
                  className={`color-button white ${
                    color === "white" ? "active" : ""
                  }`}
                  onClick={() => setColor("white")}
                ></button>
                <button
                  className={`color-button black ${
                    color === "black" ? "active" : ""
                  }`}
                  onClick={() => setColor("black")}
                ></button>
              </div>
            </div>

            <div className="input-fields">
              <input
                type="text"
                placeholder="First name & Last name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={22}
              />
              <div className="char-count">{name.length} / 22</div>

              <input
                type="text"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                maxLength={36}
              />
              <div className="char-count">{role.length} / 36</div>

              <input
                type="text"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                maxLength={36}
              />
              <div className="char-count">{company.length} / 36</div>

              <div className="referral-code">
                <input
                  type="text"
                  placeholder="Referral or Coupon Code"
                  value={referralCode}
                  onChange={(e) => setReferralCode(e.target.value)}
                />
                <button className="apply-button">APPLY</button>
              </div>

              <button className="buy-button">BUY NOW</button>
            </div>
          </div>
        </div>
      </AnimateOnView>
      <Footer/>
    </>
  );
};

export default LuxnCard;
