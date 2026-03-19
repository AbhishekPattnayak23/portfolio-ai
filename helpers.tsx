// Styling helper functions and component utilities

import React from 'react';
import { ThemeColor, theme } from './theme';

// Helper to get color from theme based on a key
export const getColor = (colorKey: ThemeColor | undefined): string => {
  if (!colorKey) return '';
  return theme.colors[colorKey] || colorKey;
};

// Helper for conditional className composition
export const classNames = (...classes: (string | boolean | undefined | null)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// Function to handle responsive prop values
export const responsive = <T extends unknown>(
  value: T | Record<string, T>,
  callback: (val: T) => string
): string => {
  if (typeof value !== 'object' || value === null) {
    return callback(value as T);
  }

  const breakpointKeys = Object.keys(theme.breakpoints);
  const mediaQueries = Object.keys(value as Record<string, T>)
    .sort((a, b) => {
      return breakpointKeys.indexOf(a) - breakpointKeys.indexOf(b);
    })
    .map(key => {
      // Handle the base/default case
      if (key === 'base' || key === 'default') {
        return callback((value as Record<string, T>)[key]);
      }

      // Handle breakpoint-specific cases
      const breakpointValue = theme.breakpoints[key as keyof typeof theme.breakpoints];
      if (breakpointValue) {
        const cssValue = callback((value as Record<string, T>)[key]);
        return `@media (min-width: ${breakpointValue}) { ${cssValue} }`;
      }
      return '';
    })
    .join(' ');

  return mediaQueries;
};

// Convert px to rem
export const pxToRem = (px: number): string => {
  return `${px / 16}rem`;
};

// Truncate text with ellipsis after specified number of lines
export const truncateText = (lines: number): React.CSSProperties => ({
  display: '-webkit-box',
  WebkitLineClamp: lines,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

// Convert hex color to RGB values
export const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

// Create rgba string from hex color and alpha value
export const hexToRgba = (hex: string, alpha: number): string => {
  const rgb = hexToRgb(hex);
  return rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})` : '';
};

// Lighten or darken a hex color by percentage
export const adjustColor = (color: string, percent: number): string => {
  const rgb = hexToRgb(color);
  if (!rgb) return color;

  const adjustValue = (value: number): number => {
    const adjusted = Math.round(value * (1 + percent / 100));
    return Math.min(255, Math.max(0, adjusted));
  };

  const r = adjustValue(rgb.r);
  const g = adjustValue(rgb.g);
  const b = adjustValue(rgb.b);

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

// Create aspect ratio container
export const aspectRatio = (ratio: number): React.CSSProperties => ({
  position: 'relative',
  paddingBottom: `${(1 / ratio) * 100}%`,
  height: 0,
  overflow: 'hidden',
});

// Style for absolutely positioning children in aspect ratio container
export const aspectRatioChild: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

// Responsive visibility helpers
export const hideOnMobile: React.CSSProperties = {
  display: 'none',
  [`@media (min-width: ${theme.breakpoints.md})`]: {
    display: 'block',
  },
};

export const showOnMobile: React.CSSProperties = {
  display: 'block',
  [`@media (min-width: ${theme.breakpoints.md})`]: {
    display: 'none',
  },
};

// Safe area insets for modern browsers
export const safeAreaInsets = {
  paddingTop: 'env(safe-area-inset-top)',
  paddingRight: 'env(safe-area-inset-right)',
  paddingBottom: 'env(safe-area-inset-bottom)',
  paddingLeft: 'env(safe-area-inset-left)',
};

// Debug outline helper (for development)
export const debugOutline = (color: string = 'red'): React.CSSProperties => ({
  outline: `1px solid ${color}`,
});

export default {
  getColor,
  classNames,
  responsive,
  pxToRem,
  truncateText,
  hexToRgb,
  hexToRgba,
  adjustColor,
  aspectRatio,
  aspectRatioChild,
  hideOnMobile,
  showOnMobile,
  safeAreaInsets,
  debugOutline,
};
