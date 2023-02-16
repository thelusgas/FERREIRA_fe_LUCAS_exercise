import { useNavigate } from 'react-router-dom';

import * as Styles from './styles';

interface Props {
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
}

export function Header({ title, subtitle, showBackButton }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <Styles.HeaderContainer>
      {subtitle && <Styles.Subtitle>{subtitle}</Styles.Subtitle>}
      <Styles.Title>{title}</Styles.Title>
      {showBackButton && <Styles.BackButton onClick={handleClick}>🔙</Styles.BackButton>}
    </Styles.HeaderContainer>
  );
}
