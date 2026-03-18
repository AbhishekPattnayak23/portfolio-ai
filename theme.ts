// Theme definition for the portfolio website
// This file defines colors, spacing, typography, breakpoints, and other design tokens

export const theme = {
  colors: {
    primary: '#0070f3',
    primaryLight: '#3291ff',
    primaryDark: '#0050af',
    secondary: '#7928ca',
    secondaryLight: '#8a3df9',
    secondaryDark: '#4c2889',
    background: '#ffffff',
    backgroundAlt: '#f7f7f7',
    text: '#333333',
    textLight: '#666666',
    heading: '#111111',
    success: '#0070f3',
    error: '#ee0000',
    warning: '#f5a623',
    info: '#0070f3',
    border: '#eaeaea',
    codeBg: '#f4f4f4',
  },

  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },

  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    xxl: '3rem',      // 48px
    xxxl: '4rem',     // 64px
  },

  fontSizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    md: '1rem',       // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    xxl: '1.5rem',    // 24px
    xxxl: '2rem',     // 32px
    display: '3rem',  // 48px
  },

  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  borderRadius: {
    sm: '0.25rem',   // 4px
    md: '0.5rem',    // 8px
    lg: '1rem',      // 16px
    xl: '2rem',      // 32px
    round: '50%',    // Round (for circles)
  },

  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.12)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.15)',
  },

  transitions: {
    default: '0.3s ease',
    fast: '0.15s ease',
    slow: '0.5s ease',
  },

  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
  },
};

// Type for theme to enable TypeScript support
export type Theme = typeof theme;
