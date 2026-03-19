import React from 'react';
import styled from 'styled-components';
import theme from './theme';

export interface CardHeaderProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  action?: React.ReactNode;
  padding?: string;
  borderBottom?: boolean;
  children?: React.ReactNode;
}

const StyledCardHeader = styled.div<{ padding?: string; borderBottom?: boolean }>`
  padding: ${props => props.padding || theme.space[4]};
  margin-top: -${theme.space[4]};
  margin-left: -${theme.space[4]};
  margin-right: -${theme.space[4]};
  margin-bottom: ${props => props.borderBottom ? theme.space[4] : '0'};
  border-bottom: ${props => props.borderBottom ? `1px solid ${theme.colors.border}` : 'none'};
  border-top-left-radius: ${theme.radii.default};
  border-top-right-radius: ${theme.radii.default};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-size: ${theme.fontSizes.lg};
  margin: 0;
`;

const Subtitle = styled.div`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.fontSizes.sm};
  margin-top: ${theme.space[1]};
`;

const ActionWrapper = styled.div`
  margin-left: ${theme.space[4]};
`;

const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  action,
  padding,
  borderBottom = true,
  children,
}) => {
  if (children) {
    return (
      <StyledCardHeader padding={padding} borderBottom={borderBottom}>
        {children}
      </StyledCardHeader>
    );
  }

  return (
    <StyledCardHeader padding={padding} borderBottom={borderBottom}>
      {(title || subtitle) && (
        <TitleWrapper>
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </TitleWrapper>
      )}
      {action && <ActionWrapper>{action}</ActionWrapper>}
    </StyledCardHeader>
  );
};

export default CardHeader;
