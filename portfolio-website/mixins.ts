import { css } from 'styled-components';
import theme from './theme';

// Flexbox utility mixins
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

// Media queries for responsive design
export const media = {
  sm: (content: string) => `
    @media (min-width: ${theme.breakpoints.sm}) {
      ${content}
    }
  `,
  md: (content: string) => `
    @media (min-width: ${theme.breakpoints.md}) {
      ${content}
    }
  `,
  lg: (content: string) => `
    @media (min-width: ${theme.breakpoints.lg}) {
      ${content}
    }
  `,
  xl: (content: string) => `
    @media (min-width: ${theme.breakpoints.xl}) {
      ${content}
    }
  `,
  '2xl': (content: string) => `
    @media (min-width: ${theme.breakpoints['2xl']}) {
      ${content}
    }
  `,
};

// Typography mixins
export const heading = css`
  font-family: ${theme.fonts.heading};
  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.lineHeights.tight};
  color: ${theme.colors.text.primary};
`;

export const bodyText = css`
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.normal};
  line-height: ${theme.lineHeights.normal};
  color: ${theme.colors.text.secondary};
`;

// Other common utility mixins
export const transition = (property = 'all') => css`
  transition: ${property} ${theme.transitions.default};
`;

export const boxShadow = (level = 'default') => css`
  box-shadow: ${theme.shadows[level as keyof typeof theme.shadows]};
`;

export const ellipsis = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const hideScrollbar = css`
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
