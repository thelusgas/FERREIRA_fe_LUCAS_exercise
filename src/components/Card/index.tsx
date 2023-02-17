import { ReactNode } from 'react';

import * as Styles from './styles';

interface CardProps {
  id?: string;
  children: ReactNode;
  url?: string;
}

export function Card({ id, children, url }: CardProps) {
  return url ? (
    <Styles.ListItem>
      <Styles.Container to={url} data-testid={`cardContainer-${id}`} $hasNavigation>
        {children}
      </Styles.Container>
    </Styles.ListItem>
  ) : (
    <Styles.ListItem>
      <Styles.Container as="div" data-testid={`cardContainer-${id}`}>
        {children}
      </Styles.Container>
    </Styles.ListItem>
  );
}
