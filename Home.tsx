import React from 'react';
import styled from 'styled-components';
import CallToAction from './CallToAction';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <h1>Welcome to My Portfolio</h1>
      <p>This is the home page content.</p>

      {/* Call-to-Action Section */}
      <CallToAction />
    </HomeContainer>
  );
};

export default Home;
