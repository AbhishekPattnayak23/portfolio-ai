import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming React Router is used
import Header from './Header';
import logo from '../../assets/logo.svg'; // Update path as needed

/**
 * Example usage of the Header component
 */
const HeaderExample = () => {
  const navigate = useNavigate();

  // Sample navigation items
  const navItems = [
    { title: 'Home', url: '/' },
    { title: 'Products', url: '/products' },
    { title: 'Services', url: '/services' },
    { title: 'About Us', url: '/about' },
    { title: 'Contact', url: '/contact' }
  ];

  // Navigation handler
  const handleNavigation = (url) => {
    navigate(url);
  };

  return (
    <div className="app">
      <Header
        navItems={navItems}
        logoSrc={logo}
        altText="Company Name"
        onNavigate={handleNavigation}
      />

      <main className="content">
        {/* Your page content here */}
        <h1>Welcome to our website</h1>
        <p>This is an example page showing the Header component in action.</p>
      </main>
    </div>
  );
};

export default HeaderExample;
