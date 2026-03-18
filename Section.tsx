import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { theme } from './theme';
import Container from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'light' | 'dark' | 'primary' | 'secondary' | 'white';
  spacing?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  containerType?: 'normal' | 'fluid' | 'narrow' | 'wide';
  noPadding?: boolean;
  as?: React.ElementType;
  centered?: boolean;
  minHeight?: string;
}

interface StyledSectionProps {
  $background?: string;
  $spacing?: string;
  $centered?: boolean;
  $minHeight?: string;
}

const StyledSection = styled.section<StyledSectionProps>`
  position: relative;
  width: 100%;

  ${props => props.$background === 'light' && css`
    background-color: ${theme.colors.backgroundAlt};
    color: ${theme.colors.text};
  `}

  ${props => props.$background === 'dark' && css`
    background-color: ${theme.colors.textLight};
    color: white;
  `}

  ${props => props.$background === 'primary' && css`
    background-color: ${theme.colors.primary};
    color: white;
  `}

  ${props => props.$background === 'secondary' && css`
    background-color: ${theme.colors.secondary};
    color: white;
  `}

  ${props => props.$background === 'white' && css`
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
  `}

  ${props => props.$spacing === 'none' && css`
    padding: 0;
  `}

  ${props => props.$spacing === 'sm' && css`
    padding: ${theme.spacing.md} 0;

    @media (min-width: ${theme.breakpoints.md}) {
      padding: ${theme.spacing.lg} 0;
    }
  `}

  ${props => props.$spacing === 'md' && css`
    padding: ${theme.spacing.lg} 0;

    @media (min-width: ${theme.breakpoints.md}) {
      padding: ${theme.spacing.xl} 0;
    }
  `}

  ${props => props.$spacing === 'lg' && css`
    padding: ${theme.spacing.xl} 0;

    @media (min-width: ${theme.breakpoints.md}) {
      padding: ${theme.spacing.xxl} 0;
    }
  `}

  ${props => props.$spacing === 'xl' && css`
    padding: ${theme.spacing.xxl} 0;

    @media (min-width: ${theme.breakpoints.md}) {
      padding: ${theme.spacing.xxxl} 0;
    }
  `}

  ${props => props.$centered && css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  `}

  ${props => props.$minHeight && css`
    min-height: ${props.$minHeight};
  `}
`;

/**
 * Section component for creating page sections with consistent styling
 *
 * @param {ReactNode} children - Content inside the section
 * @param {string} className - Additional CSS classes
 * @param {string} id - Section ID for navigation/anchoring
 * @param {'light' | 'dark' | 'primary' | 'secondary' | 'white'} background - Section background color theme
 * @param {'sm' | 'md' | 'lg' | 'xl' | 'none'} spacing - Vertical padding size
 * @param {'normal' | 'fluid' | 'narrow' | 'wide'} containerType - Type of container to use
 * @param {boolean} noPadding - Remove padding from container
 * @param {React.ElementType} as - HTML element to render as
 * @param {boolean} centered - Center content horizontally and vertically
 * @param {string} minHeight - Minimum height of section (e.g., '100vh')
 */
const Section: React.FC<SectionProps> = ({
  children,
  className,
  id,
  background = 'white',
  spacing = 'md',
  containerType = 'normal',
  noPadding = false,
  as,
  centered = false,
  minHeight,
}) => {
  return (
    <StyledSection
      className={className}
      id={id}
      $background={background}
      $spacing={spacing}
      $centered={centered}
      $minHeight={minHeight}
      as={as}
    >
      <Container
        fluid={containerType === 'fluid'}
        narrow={containerType === 'narrow'}
        wide={containerType === 'wide'}
        noPadding={noPadding}
      >
        {children}
      </Container>
    </StyledSection>
  );
};

export default Section;
