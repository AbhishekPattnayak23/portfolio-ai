import React from 'react';
import { Link } from 'react-router-dom';
import { FooterProps } from '../../types/layout';
import Container from './Container';

/**
 * Footer component with navigation, social links and copyright
 *
 * @param {Object} props - Component props
 * @param {boolean} [props.showSocialLinks=true] - Whether to display social links
 * @returns {JSX.Element} The Footer component
 */
const Footer: React.FC<FooterProps> = ({ showSocialLinks = true }) => {
  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-12 pb-8 mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary">Portfolio</span>
            </h3>
            <p className="text-gray-600 mb-4">
              Building beautiful web experiences with modern technologies.
            </p>

            {/* Social Links */}
            {showSocialLinks && (
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="text-gray-500 hover:text-primary transition-colors"
                  >
                    {/* Placeholder for icons - you can use actual icons from a library */}
                    <span>{link.icon}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a
                  href="mailto:contact@example.com"
                  className="hover:text-primary transition-colors"
                >
                  contact@example.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="hover:text-primary transition-colors"
                >
                  (123) 456-7890
                </a>
              </li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p> {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
