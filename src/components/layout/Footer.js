import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h3 className="footer-heading">About Us</h3>
            <p className="footer-text">
              We're committed to providing a consistent and responsive experience
              across all devices.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h3 className="footer-heading">Contact</h3>
            <address className="footer-contact">
              <p><strong>Email:</strong> <a href="mailto:info@example.com">info@example.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+11234567890">(123) 456-7890</a></p>
              <p><strong>Address:</strong> 123 Main Street, City, Country</p>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} YourCompany. All rights reserved.
          </p>
          <div className="footer-social">
            <a href="https://facebook.com" aria-label="Facebook" className="social-link">
              <span className="social-icon facebook-icon"></span>
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="social-link">
              <span className="social-icon twitter-icon"></span>
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="social-link">
              <span className="social-icon instagram-icon"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
