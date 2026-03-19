import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #0f172a;
  color: white;
  padding: 3rem 2rem;
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p> {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
      <p>Specialized in GenAI Development and Solutions</p>
    </FooterContainer>
  );
};

export default Footer;
