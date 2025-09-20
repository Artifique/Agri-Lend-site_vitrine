
import React from 'react';
import logo from '../logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src={logo} alt="Agri-Lend Logo" style={{ height: '50px' }} />
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#about" className="nav-links">
              À propos
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-links">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
