import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)<{ $hasNavigation?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  background: ${({ theme }) => theme.color.primaryContainer};
  color: ${({ theme }) => theme.color.onPrimaryContainer};

  cursor: ${props => (props.$hasNavigation ? 'pointer' : 'default')};

  font-family: var(--font-family-secondary);
  font-size: var(--font-medium);
  font-weight: 700;

  border-radius: 1rem;
  flex: 1 1 100%;

  @media (min-width: 60em) {
    padding: 2.5rem;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  display: flex;
`;
