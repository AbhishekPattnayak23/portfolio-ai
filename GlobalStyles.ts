// Global styles for the entire application
// Includes CSS reset and base styles

import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  /* CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Document */
  html {
    font-size: 16px;
    scroll-behavior: smooth;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  /* Body */
  body {
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.normal};
    font-size: ${theme.fontSizes.md};
    line-height: ${theme.lineHeights.normal};
    color: ${theme.colors.text};
    background-color: ${theme.colors.background};
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
  }

  /* Focus styles */
  :focus {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }

  /* Focus-visible polyfill */
  :focus:not(:focus-visible) {
    outline: none;
  }

  :focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }

  /* Links */
  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: ${theme.transitions.standard};

    &:hover {
      color: ${theme.colors.secondary};
      text-decoration: underline;
    }

    &:active {
      transform: scale(0.98);
    }
  }

  /* Headings */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeights.bold};
    line-height: ${theme.lineHeights.tight};
    color: ${theme.colors.text};
    margin-bottom: ${theme.space[4]};
  }

  h1 {
    font-size: ${theme.fontSizes['4xl']};
  }

  h2 {
    font-size: ${theme.fontSizes['3xl']};
  }

  h3 {
    font-size: ${theme.fontSizes['2xl']};
  }

  h4 {
    font-size: ${theme.fontSizes.xl};
  }

  h5 {
    font-size: ${theme.fontSizes.lg};
  }

  h6 {
    font-size: ${theme.fontSizes.md};
  }

  /* Paragraphs and other text elements */
  p, ul, ol, dl, blockquote {
    margin-bottom: ${theme.space[4]};
  }

  p:last-child, ul:last-child, ol:last-child, dl:last-child, blockquote:last-child {
    margin-bottom: 0;
  }

  /* Lists */
  ul, ol {
    padding-left: ${theme.space[6]};
  }

  li {
    margin-bottom: ${theme.space[2]};
  }

  li:last-child {
    margin-bottom: 0;
  }

  /* Tables */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: ${theme.space[4]};
  }

  th {
    text-align: left;
    padding: ${theme.space[3]};
    border-bottom: 2px solid ${theme.colors.border};
  }

  td {
    padding: ${theme.space[3]};
    border-bottom: 1px solid ${theme.colors.border};
  }

  /* Code */
  pre, code {
    font-family: ${theme.fonts.monospace};
    font-size: ${theme.fontSizes.sm};
    background-color: ${theme.colors.backgroundAlt};
    border-radius: ${theme.radii.md};
  }

  pre {
    padding: ${theme.space[4]};
    overflow-x: auto;
    margin-bottom: ${theme.space[4]};
  }

  code {
    padding: ${theme.space[1]} ${theme.space[2]};
  }

  /* Form elements */
  input, textarea, select, button {
    font-family: ${theme.fonts.body};
    font-size: ${theme.fontSizes.md};
  }

  /* Images */
  img, svg {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }

  /* Accessibility */
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  /* Utilities */
  .text-center {
    text-align: center;
  }

  .text-right {
    text-align: right;
  }

  .text-left {
    text-align: left;
  }

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Prevent overflow on the x-axis for the entire page */
  html, body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  /* Print styles */
  @media print {
    body {
      background-color: white;
      color: black;
    }

    a {
      color: black;
      text-decoration: underline;
    }
  }
`;

export default GlobalStyles;
