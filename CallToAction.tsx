import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

interface CallToActionProps {
  className?: string;
  resumeUrl?: string;
  onContactClick?: () => void;
  onPortfolioClick?: () => void;
}

const StyledCallToAction = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f9fa;
  padding: 4rem 2rem;
  text-align: center;

  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 2.5rem;
  color: #5a6877;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const CallToAction: React.FC<CallToActionProps> = ({
  className,
  resumeUrl = "/resume.pdf",
  onContactClick,
  onPortfolioClick
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  const handleResumeDownload = () => {
    try {
      setIsDownloading(true);
      setDownloadError(null);

      // Check if resume URL exists
      if (!resumeUrl) {
        throw new Error("Resume URL is not defined");
      }

      // Log download attempt
      console.log(`Attempting to download resume from: ${resumeUrl}`);

      // Create a link element to trigger download
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.setAttribute('download', 'resume.pdf');
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');

      // Append to body, click, then remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Reset download state after a delay
      setTimeout(() => {
        setIsDownloading(false);
      }, 1000);

    } catch (error) {
      console.error("Resume download failed:", error);
      setDownloadError("Failed to download resume. Please try again later.");
      setIsDownloading(false);
    }
  };

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      // Default behavior if no handler provided
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn("Contact section not found in the document");
      }
    }
  };

  const handlePortfolioClick = () => {
    if (onPortfolioClick) {
      onPortfolioClick();
    } else {
      // Default behavior if no handler provided
      const portfolioElement = document.getElementById('portfolio');
      if (portfolioElement) {
        portfolioElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn("Portfolio section not found in the document");
      }
    }
  };

  return (
    <StyledCallToAction className={className} id="call-to-action">
      <Title>Ready to collaborate?</Title>
      <Description>
        Check out my portfolio, download my resume, or get in touch to discuss how we can work together on your next project.
      </Description>

      {downloadError && (
        <p style={{ color: 'red', marginBottom: '1rem' }}>{downloadError}</p>
      )}

      <ButtonGroup>
        <Button
          variant="primary"
          onClick={handlePortfolioClick}
          aria-label="View portfolio"
        >
          View Portfolio
        </Button>

        <Button
          variant="outline"
          onClick={handleResumeDownload}
          disabled={isDownloading}
          aria-label="Download resume"
        >
          {isDownloading ? 'Downloading...' : 'Download Resume'}
        </Button>

        <Button
          variant="secondary"
          onClick={handleContactClick}
          aria-label="Contact me"
        >
          Contact Me
        </Button>
      </ButtonGroup>
    </StyledCallToAction>
  );
};

export default CallToAction;
