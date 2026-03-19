// CSS Variables and constants used throughout the application
import theme from './theme';

// Convert theme to CSS variables
export const themeToVariables = () => {
  let cssVars = '';

  // Process colors
  Object.entries(theme.colors).forEach(([key, value]) => {
    cssVars += `--color-${key}: ${value};\n`;
  });

  // Process spacing
  Object.entries(theme.space).forEach(([key, value]) => {
    cssVars += `--space-${key}: ${value};\n`;
  });

  // Process font sizes
  Object.entries(theme.fontSizes).forEach(([key, value]) => {
    cssVars += `--font-size-${key}: ${value};\n`;
  });

  // Process breakpoints
  Object.entries(theme.breakpoints).forEach(([key, value]) => {
    cssVars += `--breakpoint-${key}: ${value};\n`;
  });

  return `:root {\n${cssVars}}`;
};

// Animation durations
export const ANIMATION_DURATION = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
};

// Z-index values
export const Z_INDEX = {
  background: -1,
  default: 1,
  header: 100,
  modal: 1000,
  tooltip: 1500,
};

// Common border radius values
export const BORDER_RADIUS = {
  small: '4px',
  medium: '8px',
  large: '12px',
  round: '50%',
};

// Maximum widths for different container sizes
export const MAX_WIDTH = {
  small: '640px',
  medium: '768px',
  large: '1024px',
  xlarge: '1280px',
  xxlarge: '1440px',
  content: '65ch', // optimal reading width
};

// Standardized shadows
export const SHADOWS = {
  sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  md: '0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)',
  lg: '0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10)',
  xl: '0 15px 25px rgba(0,0,0,0.15), 0 5px 10px rgba(0,0,0,0.05)',
  inner: 'inset 0 2px 4px rgba(0,0,0,0.06)',
};

// Font stacks
export const FONTS = {
  body: theme.fonts.body,
  heading: theme.fonts.heading,
  monospace: theme.fonts.monospace,
};

// Utilities for working with colors
export const colorWithOpacity = (color: string, opacity: number): string => {
  // If color is already in rgba format, just change the opacity
  if (color.startsWith('rgba')) {
    return color.replace(/[\d.]+\)$/g, `${opacity})`);
  }

  // If color is hex, convert to rgba
  if (color.startsWith('#')) {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  // For named colors or other formats, default approach
  return `${color}${Math.round(opacity * 100)}`;
};

// Screen reader only utility
export const SCREEN_READER_ONLY = `
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

// Error colors for form validation
export const VALIDATION_COLORS = {
  error: theme.colors.error,
  success: theme.colors.success,
  warning: theme.colors.warning,
  info: theme.colors.info,
};

export default {
  themeToVariables,
  ANIMATION_DURATION,
  Z_INDEX,
  BORDER_RADIUS,
  MAX_WIDTH,
  SHADOWS,
  FONTS,
  colorWithOpacity,
  SCREEN_READER_ONLY,
  VALIDATION_COLORS,
};
