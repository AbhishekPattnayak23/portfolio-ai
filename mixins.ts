// CSS Mixins for reusable styles
// Includes responsive design utilities, typography helpers, and common patterns

import { css } from 'styled-components';
import theme from './theme';

type BreakpointKey = keyof typeof theme.breakpoints;

// Media query helper for responsive design
export const media = Object.keys(theme.breakpoints).reduce((acc, label) => {
  acc[label as BreakpointKey] = (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media (min-width: ${theme.breakpoints[label as BreakpointKey]}) {
      ${css(literals, ...placeholders)};
    }
  `;
  return acc;
}, {} as Record<BreakpointKey, (l: TemplateStringsArray, ...p: any[]) => ReturnType<typeof css>>);

// Typography helpers
export const headingStyles = css`
  font-family: ${theme.fonts.heading};
  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.lineHeights.tight};
  color: ${theme.colors.text};
  margin-top: 0;
`;

export const bodyTextStyles = css`
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.normal};
  line-height: ${theme.lineHeights.normal};
  color: ${theme.colors.text};
`;

export const codeTextStyles = css`
  font-family: ${theme.fonts.monospace};
  font-size: ${theme.fontSizes.sm};
  padding: ${theme.space[1]} ${theme.space[2]};
  border-radius: ${theme.radii.md};
  background-color: ${theme.colors.backgroundAlt};
`;

// Flexbox layouts
export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

// Common patterns
export const cardStyles = css`
  background-color: ${theme.colors.background};
  border-radius: ${theme.radii.lg};
  box-shadow: ${theme.shadows.md};
  padding: ${theme.space[6]};
  transition: ${theme.transitions.standard};

  &:hover {
    box-shadow: ${theme.shadows.lg};
    transform: translateY(-2px);
  }
`;

export const buttonReset = css`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  cursor: pointer;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;

export const srOnly = css`
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

export const truncateText = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// Animation helpers
export const fadeIn = css`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadeIn 0.5s ease-in-out;
`;

export const slideInUp = css`
  @keyframes slideInUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  animation: slideInUp 0.4s ease-out;
`;

// Responsive container
export const container = css`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: ${theme.space[4]};
  padding-left: ${theme.space[4]};

  ${media.sm`
    max-width: 540px;
  `}

  ${media.md`
    max-width: 720px;
  `}

  ${media.lg`
    max-width: 960px;
  `}

  ${media.xl`
    max-width: 1140px;
  `}

  ${media.xxl`
    max-width: 1320px;
  `}
`;

// Grid system
export const grid = (columns: number = 12, gap: keyof typeof theme.space = 4) => css`
  display: grid;
  grid-template-columns: repeat(${columns}, 1fr);
  grid-gap: ${theme.space[gap]};
`;
