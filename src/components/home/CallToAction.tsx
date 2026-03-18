import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './CallToAction.module.css';
import { Bio } from '../../types/data';
import SocialLinks from '../common/SocialLinks';

interface CallToActionProps {
  bio: Bio;
}

/**
 * CallToAction component for the home page
 * Provides buttons for portfolio navigation, resume download, and social media links
 */
const CallToAction: React.FC<CallToActionProps> = ({ bio }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  // Animation variants for staggered button animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  /**
   * Handle resume download with error handling
   */
  const handleDownloadResume = async (e: React.MouseEvent) => {
    // Reset error state
    setDownloadError(null);

    // Only proceed if we have a resume URL
    if (!bio?.resumeUrl) {
      console.error("Resume URL not available");
      setDownloadError("Resume not available. Please try again later.");
      return;
    }

    try {
      setIsDownloading(true);
      console.log("Initiating resume download...");

      // Fetch the resume file
      const response = await fetch(bio.resumeUrl);

      if (!response.ok) {
        throw new Error(`Failed to download resume: ${response.status}`);
      }

      // Create a blob from the response
      const blob = await response.blob();

      // Create a temporary URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Create a temporary link element and trigger download
      const link = document.createElement('a');
      link.href = url;
      link.download = "resume.pdf";
      document.body.appendChild(link);
      link.click();

      // Clean up
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
      console.log("Resume download complete");
    } catch (error) {
      console.error("Error downloading resume:", error);
      setDownloadError("Failed to download resume. Please try again later.");
    } finally {
      setIsDownloading(false);
    }
  };

  // Fallback UI when bio data is missing
  if (!bio) {
    return (
      <div className={styles.fallbackContainer}>
        <p>Loading call-to-action content...</p>
      </div>
    );
  }

  return (
    <motion.div
      className={styles.ctaContainer}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className={styles.primaryCta} variants={buttonVariants}>
        <Link to="/projects" className={styles.primaryButton}>
          View My Portfolio
        </Link>
      </motion.div>

      <motion.div className={styles.secondaryCta} variants={buttonVariants}>
        <button
          className={styles.secondaryButton}
          onClick={handleDownloadResume}
          disabled={isDownloading}
          aria-busy={isDownloading}
        >
          {isDownloading ? 'Downloading...' : 'Download Resume'}
        </button>
        {downloadError && (
          <div className={styles.errorMessage}>
            {downloadError}
          </div>
        )}
      </motion.div>

      <motion.div className={styles.socialLinksContainer} variants={buttonVariants}>
        <SocialLinks className={styles.socialLinks} />
      </motion.div>
    </motion.div>
  );
};

export default CallToAction;
