import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { theme } from './theme';

interface ContainerProps {
  children: ReactNode;
  fluid?: boolean;
  className?: string;
  as?: React.ElementType;
  narrow?: boolean;
  wide?: boolean;
  noPadding?: boolean;
}

interface StyledContainerProps {
  $fluid?: boolean;
  $narrow?: boolean;
  $wide?: boolean;
  $noPadding?: boolean;
}

const StyledContainer = styled.div<StyledContainerProps>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.$noPadding ? '0' : theme.spacing.md};
  padding-right: ${props => props.$noPadding ? '0' : theme.spacing.md};

  ${props => !props.$fluid && css`
    max-width: 1200px;

    @media (max-width: ${theme.breakpoints.xl}) {
      max-width: 1140px;
    }

    @media (max-width: ${theme.breakpoints.lg}) {
      max-width: 960px;
    }

    @media (max-width: ${theme.breakpoints.md}) {
      max-width: 720px;
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      max-width: 540px;
    }
  `}

  ${props => props.$narrow && css`
    max-width: 768px;
  `}

  ${props => props.$wide && css`
    max-width: 1400px;
  `}
`;

/**
 * Container component for layout management
 *
 * @param {ReactNode} children - Content to be contained
 * @param {boolean} fluid - Whether the container should be full-width
 * @param {string} className - Additional CSS classes
 * @param {React.ElementType} as - HTML element to render as
 * @param {boolean} narrow - Use a narrower max-width (768px)
 * @param {boolean} wide - Use a wider max-width (1400px)
 * @param {boolean} noPadding - Remove default padding
 */
const Container: React.FC<ContainerProps> = ({
  children,
  fluid = false,
  className,
  as,
  narrow = false,
  wide = false,
  noPadding = false,
}) => {
  return (
    <StyledContainer
      as={as}
      className={className}
      $fluid={fluid}
      $narrow={narrow}
      $wide={wide}
      $noPadding={noPadding}
    >
      {children}
    </StyledContainer>
  );
};

export default Container;
