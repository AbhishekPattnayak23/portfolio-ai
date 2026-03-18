import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Main = styled.main`
  min-height: calc(100vh - 160px); /* Adjust based on header/footer height */
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

/**
 * Main layout component that wraps all pages
 * Provides consistent structure with header, main content area, and footer
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  // You could use the location to determine specific layout changes
  // For example, different background on homepage
  const isHomePage = location.pathname === '/';

  return (
    <PageWrapper>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </PageWrapper>
  );
};

export default Layout;
