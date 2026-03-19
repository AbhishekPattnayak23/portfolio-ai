import React from 'react';
import styled from 'styled-components';
import theme from './theme';

export interface CardProps {
  width?: string;
  height?: string;
  padding?: string;
  border?: string;
  borderRadius?: string;
  shadow?: 'none' | 'sm' | 'default' | 'md' | 'lg' | 'xl';
  background?: string;
  hoverEffect?: boolean;
  children: React.ReactNode;
}

const StyledCard = styled.div<CardProps>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  padding: ${props => props.padding || theme.space[4]};
  border: ${props => props.border || `1px solid ${theme.colors.border}`};
  border-radius: ${props => props.borderRadius || theme.radii.default};
  box-shadow: ${props => props.shadow === 'none' ? 'none' : theme.shadows[props.shadow || 'default']};
  background-color: ${props => props.background || theme.colors.surface};
  transition: ${theme.transitions.default};

  ${props => props.hoverEffect && `
    &:hover {
      transform: translateY(-4px);
      box-shadow: ${theme.shadows.lg};
    }
  `}
`;

const Card: React.FC<CardProps> = ({
  width,
  height,
  padding,
  border,
  borderRadius,
  shadow = 'default',
  background,
  hoverEffect = false,
  children,
}) => {
  return (
    <StyledCard
      width={width}
      height={height}
      padding={padding}
      border={border}
      borderRadius={borderRadius}
      shadow={shadow}
      background={background}
      hoverEffect={hoverEffect}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
