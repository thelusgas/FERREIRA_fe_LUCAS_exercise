import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  padding-block: 2rem 1rem;
  padding-inline: 1rem;
  gap: 0.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: var(--font-family-secondary);
  font-size: var(--font-large);
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary};

  padding-bottom: 1rem;

  @media (min-width: 60em) {
    font-size: var(--font-extra-large);
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: var(--font-medium);
  cursor: pointer;

  background: ${({ theme }) => theme.color.secondaryContainer};
  padding: 0.5rem 0.75rem;
  border-radius: 50%;
`;

export const Subtitle = styled.h2`
  font-family: var(--font-family-primary);
  font-size: var(--font-base);
  font-weight: 500;
  color: ${({ theme }) => theme.color.primary};

  text-transform: uppercase;
  letter-spacing: 0.1rem;

  @media (min-width: 60em) {
    font-size: var(--font-medium);
  }
`;
