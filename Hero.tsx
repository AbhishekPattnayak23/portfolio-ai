import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6rem 1rem;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  color: white;
  position: relative;
  overflow: hidden;
  min-height: 80vh;

  @media (min-width: 768px) {
    text-align: left;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 600px;
  margin: 0 auto;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #ffffff, #a5f3fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Highlight = styled.span`
  color: #4ade80;
  -webkit-text-fill-color: #4ade80;
`;

const SubTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 2rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const FloatingShape = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  filter: blur(8px);
  z-index: 0;
  animation: float 8s infinite ease-in-out;

  &:nth-child(1) {
    width: 150px;
    height: 150px;
    top: 10%;
    right: 15%;
    animation-delay: 0s;
  }

  &:nth-child(2) {
    width: 200px;
    height: 200px;
    bottom: 10%;
    left: 5%;
    animation-delay: 2s;
  }

  &:nth-child(3) {
    width: 100px;
    height: 100px;
    bottom: 30%;
    right: 25%;
    animation-delay: 4s;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(10deg);
    }
  }
`;

const HeroImage = styled.div`
  position: relative;
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 40%;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

const AIBadge = styled.div`
  background-color: rgba(79, 70, 229, 0.1);
  border: 1px solid rgba(79, 70, 229, 0.2);
  color: #818cf8;
  padding: 0.25rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  margin-bottom: 1.5rem;

  svg {
    margin-right: 0.5rem;
    width: 1rem;
    height: 1rem;
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <FloatingShape />
      <FloatingShape />
      <FloatingShape />

      <HeroContent>
        <AIBadge>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
          GenAI Specialist
        </AIBadge>
        <HeroTitle>
          Building the Future with <Highlight>Generative AI</Highlight> Solutions
        </HeroTitle>
        <SubTitle>
          Transforming ideas into reality through cutting-edge AI development,
          prompt engineering, and LLM fine-tuning for businesses ready to innovate.
        </SubTitle>
        <ButtonContainer>
          <Button primary>View Projects</Button>
          <Button>Contact Me</Button>
        </ButtonContainer>
      </HeroContent>

      <HeroImage>
        <img src="https://via.placeholder.com/600x400/1e293b/ffffff?text=AI+Visualization" alt="AI Visualization" />
      </HeroImage>
    </HeroSection>
  );
};

export default Hero;
