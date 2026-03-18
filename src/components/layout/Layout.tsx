import React from 'react';
import { LayoutProps } from '../../types/layout';
import Header from './Header';
import Footer from './Footer';

/**
 * Main layout wrapper component that includes header, main content, and footer
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The content to be displayed in the main area
 * @returns {JSX.Element} The Layout component
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header fixed={true} />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
