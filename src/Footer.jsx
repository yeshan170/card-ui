import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaTiktok, FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css'; 


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="contact-info">
          <div>
            <h3>WhatsApp</h3>
            <p><FaWhatsapp /> +94 761617688</p>
          </div>
          <div>
            <h3>Call us</h3>
            <p><FaPhone /> +94 761617688</p>
          </div>
          <div>
            <h3>Mail us</h3>
            <p><FaEnvelope /> info@xygenai.com</p>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h3>XYGEN Card</h3>
            <ul>
              <li>Buy Now</li>
              <li>Custom Card</li>
              <li>For Teams</li>
              <li>Blogs</li>
              <li>Login</li>
            </ul>
          </div>
          <div>
            <h3>Help & Support</h3>
            <ul>
              <li>FAQ</li>
              <li>Contact Us</li>
              <li>Terms Of Use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3>Social Media</h3>
            <div className="social-icons">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaLinkedinIn />
              <FaTiktok />
            </div>
          </div>
        </div>

       

        <div className="copyright">
          <p>&copy; 2024 XYGEN | Powered by XYGEN IT</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;