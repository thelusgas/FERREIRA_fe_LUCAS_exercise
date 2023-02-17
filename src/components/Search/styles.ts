import styled from 'styled-components';

export const Input = styled.input`
  display: flex;

  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  min-width: 20rem;

  margin-block: 1rem 2rem;

  background: ${({ theme }) => theme.color.secondaryContainer};
  color: ${({ theme }) => theme.color.onSecondaryContainer};
  border: 3px solid transparent;

  font-family: var(--font-family-primary);
  font-size: var(--font-size-large);

  outline-color: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.color.secondary};
  }

  @media (hover: hover) {
    &:hover {
      background: ${({ theme }) => theme.color.primaryContainer};
      color: ${({ theme }) => theme.color.onPrimaryContainer};
    }
  }

  &:focus {
    border-color: ${({ theme }) => theme.color.primary};
  }

  transition: all 0.2s ease-in-out;

  @media (min-width: 60em) {
    padding: 1rem 2rem;
    min-width: 40rem;
  }
`;
