import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NAV_ITEMS } from './constants/navigation';

interface HeaderProps {
  logoSrc?: string;
  logoAlt?: string;
  logoText?: string;
}

const Header: React.FC<HeaderProps> = ({
  logoSrc = '',
  logoAlt = 'Logo',
  logoText = 'Portfolio',
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Handle scroll event to add shadow to header when scrolled
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Check initial scroll position
    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer scrolled={scrolled} data-testid="header">
      <HeaderContent>
        <LogoContainer>
          {logoSrc ? (
            <Logo src={logoSrc} alt={logoAlt} />
          ) : (
            <LogoText>{logoText}</LogoText>
          )}
        </LogoContainer>

        <MobileMenuButton
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>

        <Nav isOpen={isMenuOpen}>
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.path}>
              {item.isExternal ? (
                <NavLink
                  as="a"
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </NavLink>
              ) : (
                <NavLink
                  as={Link}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              )}
            </NavItem>
          ))}
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

// Styled components
const HeaderContainer = styled.header<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors?.background || '#ffffff'};
  transition: box-shadow 0.3s ease;
  box-shadow: ${({ scrolled }) =>
    scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
`;

const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.primary || '#333333'};
  margin: 0;
`;

const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors?.background || '#ffffff'};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: ${({ isOpen }) => (isOpen ? 'scaleY(1)' : 'scaleY(0)')};
    transform-origin: top;
    transition: transform 0.3s ease;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    z-index: 1000;
  }
`;

const NavItem = styled.div`
  margin: 0 0.5rem;

  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
    text-align: center;
  }
`;

const NavLink = styled.a`
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors?.text || '#333333'};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  display: block;

  &:hover {
    color: ${({ theme }) => theme.colors?.primary || '#0070f3'};
  }

  @media (max-width: 768px) {
    padding: 1rem;
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors?.text || '#333333'};
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors?.primary || '#0070f3'};
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Header;
