export const defaultTheme = {
  colors: {
    primary: '#0070f3',
    secondary: '#ff4081',
    background: '#ffffff',
    text: '#333333',
    textLight: '#666666',
    border: '#e0e0e0',
    error: '#d32f2f',
    success: '#388e3c',
    warning: '#f57c00',
    info: '#0288d1',
  },
  fonts: {
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    monospace: "Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  breakpoints: {
    xs: '0px',
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1920px',
  },
};

export type Theme = typeof defaultTheme;
