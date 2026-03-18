import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Define the Bio interface for the component props
interface Bio {
  name: string;
  title: string;
  summary: string;
  description: string[];
  image: string;
  resumeUrl: string;
}

interface HeroProps {
  bio: Bio;
}

// Sample data for testing - will be replaced with actual data in production
const sampleBio: Bio = {
  name: "John Doe",
  title: "Full Stack Developer",
  summary: "Building elegant solutions for complex problems",
  description: [
    "I specialize in creating responsive, user-friendly web applications",
    "Passionate about clean code, performance optimization, and intuitive UI/UX",
    "5+ years of experience in web development with modern technologies"
  ],
  image: "https://via.placeholder.com/300",
  resumeUrl: "/resume.pdf"
};

// Hero component
const Hero: React.FC<HeroProps> = ({ bio = sampleBio }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const typingSpeed = 100; // ms per character
  const controls = useAnimation();
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Typing animation effect
  useEffect(() => {
    if (currentIndex < bio.title.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prevText => prevText + bio.title[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
      // Trigger the description animation once typing is complete
      controls.start("visible");
    }
  }, [currentIndex, bio.title, controls]);

  // Scroll animation setup
  useEffect(() => {
    if (isTypingComplete) {
      controls.start("visible");
    }
  }, [isTypingComplete, controls]);

  // Handle image loading
  const handleImageLoad = () => {
    setImgLoaded(true);
    console.log("Hero image loaded successfully");
  };

  // Handle image error
  const handleImageError = () => {
    console.error("Failed to load hero image");
    setImgError(true);
  };

  // Animation variants
  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const scrollIndicatorVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0.2, 1, 0.2],
      y: [0, 10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop" as const
      }
    }
  };

  return (
    <HeroContainer>
      <HeroBackground />

      <HeroContent>
        <LeftContent>
          <NameHeading>
            {bio.name || "Your Name"}
          </NameHeading>

          <TitleContainer>
            <TypedTitle>
              {displayedText}
              {currentIndex < bio.title.length && <Cursor>|</Cursor>}
            </TypedTitle>
          </TitleContainer>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={descriptionVariants}
          >
            <Summary>{bio.summary}</Summary>

            <DescriptionList>
              {bio.description && bio.description.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </DescriptionList>

            <ButtonsContainer>
              <motion.div
                variants={itemVariants}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <PrimaryButton to="/contact">Contact Me</PrimaryButton>
              </motion.div>

              <motion.div
                variants={itemVariants}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <SecondaryButton
                  href={bio.resumeUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </SecondaryButton>
              </motion.div>
            </ButtonsContainer>
          </motion.div>
        </LeftContent>

        <RightContent>
          <ImageContainer>
            <AnimatePresence>
              {!imgLoaded && !imgError && (
                <ImagePlaceholder
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Loading...
                </ImagePlaceholder>
              )}
            </AnimatePresence>

            {!imgError ? (
              <ProfileImage
                ref={imgRef}
                src={bio.image}
                alt={`${bio.name} - ${bio.title}`}
                onLoad={handleImageLoad}
                onError={handleImageError}
                style={{ opacity: imgLoaded ? 1 : 0 }}
              />
            ) : (
              <FallbackImage>
                <FallbackInitial>
                  {bio.name ? bio.name.charAt(0).toUpperCase() : "?"}
                </FallbackInitial>
              </FallbackImage>
            )}
          </ImageContainer>
        </RightContent>
      </HeroContent>

      <ScrollIndicator
        variants={scrollIndicatorVariants}
        initial="hidden"
        animate="visible"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </ScrollIndicator>
    </HeroContainer>
  );
};

// Styled components
const HeroContainer = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    min-height: 90vh;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
  z-index: -1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(circle at 25% 25%, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
    background-size: 20px 20px;
  }
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LeftContent = styled.div`
  flex: 1;
  padding-right: 2rem;

  @media (max-width: 992px) {
    padding-right: 0;
    margin-bottom: 3rem;
    order: 2;
  }
`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 992px) {
    order: 1;
    margin-bottom: 2rem;
  }
`;

const NameHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1a1a1a;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TitleContainer = styled.div`
  min-height: 3.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    min-height: 3rem;
    justify-content: center;
  }
`;

const TypedTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #4a6cf7;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  animation: blink 1s step-end infinite;

  @keyframes blink {
    from, to {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`;

const Summary = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const DescriptionList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 2rem;

  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.75rem;
    font-size: 1.1rem;
    color: #555;
    line-height: 1.5;

    &::before {
      content: "";
      color: #4a6cf7;
      position: absolute;
      left: 0;
      font-size: 1.2rem;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
      padding-left: 1.25rem;
      text-align: left;
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #4a6cf7;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3a5ce5;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(74, 108, 247, 0.3);
  }
`;

const SecondaryButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: #4a6cf7;
  border: 2px solid #4a6cf7;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(74, 108, 247, 0.1);
    transform: translateY(-2px);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
`;

const ImagePlaceholder = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e4e8f0;
  color: #555;
  font-weight: 500;
`;

const FallbackImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #4a6cf7 0%, #3a5ce5 100%);
  color: white;
  font-weight: 700;
`;

const FallbackInitial = styled.span`
  font-size: 6rem;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: #4a6cf7;
  cursor: pointer;

  @media (max-width: 768px) {
    bottom: 1rem;
  }
`;

// Export the Hero component with a default props fallback
export default Hero;

// For testing purposes, also export the component with sample data
export const HeroWithSampleData = () => <Hero bio={sampleBio} />;
