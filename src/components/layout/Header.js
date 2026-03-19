import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [error, setError] = useState(null);

  const toggleMenu = () => {
    try {
      setMenuOpen(!menuOpen);
    } catch (err) {
      console.error("Failed to toggle menu:", err);
      setError("Navigation error");
    }
  };

  // Handle any layout errors gracefully
  if (error) {
    return (
      <header className="header header-fallback">
        <div className="container">
          <div className="header-inner">
            <Link to="/" className="logo">SiteName</Link>
            <nav className="main-nav">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Link to="/" className="logo" aria-label="Homepage">SiteName</Link>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-button"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="menu-icon"></span>
          </button>

          {/* Main navigation */}
          <nav
            id="main-navigation"
            className={`main-nav ${menuOpen ? 'is-active' : ''}`}
          >
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">Products</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
