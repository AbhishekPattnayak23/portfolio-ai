export interface LayoutProps {
  children: React.ReactNode;
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: boolean;
  as?: React.ElementType;
}

export interface HeaderProps {
  fixed?: boolean;
}

export interface NavigationItem {
  name: string;
  path: string;
}

export interface FooterProps {
  showSocialLinks?: boolean;
}
