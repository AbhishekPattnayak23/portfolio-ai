import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

/**
 * Sanitizes URL parameters to prevent XSS attacks
 * @param param String parameter to sanitize
 * @returns Sanitized string
 */
export const sanitizeUrlParam = (param: string | undefined): string => {
  if (!param) return '';
  // Remove potentially harmful characters
  return param.replace(/[^\w-]/g, '');
};

/**
 * Validates project ID format
 * @param id Project ID to validate
 * @returns Boolean indicating if ID is valid
 */
export const isValidProjectId = (id: string | undefined): boolean => {
  if (!id) return false;
  // Project IDs should be alphanumeric with dashes only
  // and between 3-50 characters
  return /^[a-zA-Z0-9-]{3,50}$/.test(id);
};

/**
 * Wrapper component for protected routes (e.g. admin sections)
 */
interface ProtectedRouteProps {
  children: React.ReactNode;
  isAuthenticated: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  isAuthenticated
}) => {
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login and save intended destination
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

/**
 * Create secure links that prevent XSS in user-provided URLs
 */
interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  children,
  className
}) => {
  // Validate that the URL is safe
  const isValidUrl = (url: string): boolean => {
    try {
      const urlObj = new URL(url);
      return urlObj.protocol === 'https:' || urlObj.protocol === 'http:';
    } catch {
      return false;
    }
  };

  if (!isValidUrl(href)) {
    return <span className={className}>{children}</span>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
};
