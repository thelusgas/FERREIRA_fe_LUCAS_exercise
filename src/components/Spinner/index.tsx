import * as Styles from './styles';

export function Spinner({ isFullPage }: { isFullPage?: boolean }) {
  return <Styles.Spinner data-testid="spinner" $isFullPage={!!isFullPage} />;
}
