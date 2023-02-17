import { Header } from '@components/Header';
import { ReactNode } from 'react';

import * as Styles from './styles';

export interface LayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  showBackButton?: boolean;
}

export function Layout({ title, subtitle, showBackButton, children }: LayoutProps) {
  return (
    <>
      <Header title={title} subtitle={subtitle} showBackButton={!!showBackButton} />
      <Styles.Container>{children}</Styles.Container>
    </>
  );
}
