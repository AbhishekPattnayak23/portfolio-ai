import React, { useState } from 'react';
import { NavBarProps, NavLinkType } from '../../types';

const NavBar: React.FC<NavBarProps> = ({ links }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  // Function to determine if a link is active based on current URL
  const isActive = (href: string): boolean => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      if (href === '/') {
        return currentPath === '/';
      }
      return currentPath.startsWith(href);
    }
    return false;
  };

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {links.map((link: NavLinkType, index: number) => {
        const active = isActive(link.href) || activeIndex === index;
        return (
          <a
            key={index}
            href={link.href}
            target={link.external ? "_blank" : "_self"}
            rel={link.external ? "noopener noreferrer" : ""}
            className={`
              font-medium transition-colors
              ${active
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-800 hover:text-primary'
              }
            `}
            onClick={() => setActiveIndex(index)}
          >
            {link.text}
          </a>
        );
      })}
    </nav>
  );
};

export default NavBar;
