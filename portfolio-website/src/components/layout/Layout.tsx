import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { NavLinkType } from '../../types';

interface LayoutProps {
  children: React.ReactNode;
  siteTitle: string;
  navLinks: NavLinkType[];
  logo?: React.ReactNode;
  footerSocialLinks?: Array<{
    name: string;
    url: string;
    icon: React.ReactNode;
  }>;
  footerLinks?: Array<{
    title: string;
    links: Array<{
      text: string;
      url: string;
      external?: boolean;
    }>;
  }>;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  siteTitle,
  navLinks,
  logo,
  footerSocialLinks,
  footerLinks,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header siteTitle={siteTitle} logo={logo} navLinks={navLinks} />
      <main className="flex-grow pt-16">{children}</main>
      <Footer
        siteTitle={siteTitle}
        socialLinks={footerSocialLinks}
        footerLinks={footerLinks}
      />
    </div>
  );
};

export default Layout;
