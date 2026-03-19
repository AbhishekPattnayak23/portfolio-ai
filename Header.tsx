import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #4ade80;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>DevPortfolio</Logo>
      <Nav>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Projects</NavLink>
        <NavLink href="#">Expertise</NavLink>
        <NavLink href="#">Contact</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
