import { css } from 'styled-components';
import { theme } from './theme';

// Flexbox helpers
export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

// Media queries
export const media = {
  xs: (styles: string) => css`
    @media (min-width: ${theme.breakpoints.xs}) {
      ${styles}
    }
  `,
  sm: (styles: string) => css`
    @media (min-width: ${theme.breakpoints.sm}) {
      ${styles}
    }
  `,
  md: (styles: string) => css`
    @media (min-width: ${theme.breakpoints.md}) {
      ${styles}
    }
  `,
  lg: (styles: string) => css`
    @media (min-width: ${theme.breakpoints.lg}) {
      ${styles}
    }
  `,
  xl: (styles: string) => css`
    @media (min-width: ${theme.breakpoints.xl}) {
      ${styles}
    }
  `,
  xxl: (styles: string) => css`
    @media (min-width: ${theme.breakpoints.xxl}) {
      ${styles}
    }
  `,
};

// Typography helpers
export const heading = css`
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.heading};
  line-height: 1.2;
`;

export const paragraph = css`
  font-size: ${theme.fontSizes.md};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.md};
`;

// Common UI element styling
export const card = css`
  background: ${theme.colors.background};
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.shadows.md};
  padding: ${theme.spacing.lg};
  transition: transform ${theme.transitions.default}, box-shadow ${theme.transitions.default};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${theme.shadows.lg};
  }
`;

// Container width constraints
export const containerWidth = css`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
`;

// Button styles
export const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  font-size: ${theme.fontSizes.md};
  font-weight: ${theme.fontWeights.medium};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  transition: all ${theme.transitions.fast};
  border: none;
  outline: none;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const primaryButton = css`
  ${buttonBase};
  background-color: ${theme.colors.primary};
  color: white;

  &:hover:not(:disabled) {
    background-color: ${theme.colors.primaryDark};
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }
`;

export const secondaryButton = css`
  ${buttonBase};
  background-color: transparent;
  border: 1px solid ${theme.colors.primary};
  color: ${theme.colors.primary};

  &:hover:not(:disabled) {
    background-color: rgba(0, 112, 243, 0.1);
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }
`;
