import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <header>
      <div className="logo">XYGEN.AI</div>
      <nav className="navbar">
        <ul className={`nav-links ${isMenuActive ? 'active' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/create-card" onClick={toggleMenu}>Create Card</Link></li>
          <li><Link to="/sharing-options" onClick={toggleMenu}>Sharing Options</Link></li>
          <li><Link to="/profile" onClick={toggleMenu}>Profile</Link></li>
        </ul>
        <div className={`hamburger ${isMenuActive ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;