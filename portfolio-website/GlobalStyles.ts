import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.fonts.body};
    color: ${theme.colors.text.primary};
    background-color: ${theme.colors.background};
    line-height: ${theme.lineHeights.normal};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeights.bold};
    line-height: ${theme.lineHeights.tight};
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

  p {
    margin-bottom: ${theme.space[4]};
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: ${theme.transitions.default};

    &:hover {
      color: ${theme.colors.secondary};
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul, ol {
    margin-bottom: ${theme.space[4]};
    padding-left: ${theme.space[5]};
  }

  button {
    cursor: pointer;
    font-family: ${theme.fonts.body};
  }

  input, textarea, select {
    font-family: ${theme.fonts.body};
  }
`;

export default GlobalStyles;
