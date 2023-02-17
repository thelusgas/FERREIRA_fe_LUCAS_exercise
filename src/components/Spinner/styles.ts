import styled, { css, keyframes } from 'styled-components';

const spinnerAnimation = keyframes`
from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div<{ $isFullPage: boolean }>`
  height: 4rem;
  width: 4rem;
  border: 4px solid ${({ theme }) => theme.color.primaryContainer};
  border-top-color: ${({ theme }) => theme.color.primary};
  border-radius: 50%;
  animation: ${spinnerAnimation} 800ms linear infinite;

  max-width: 4rem;

  margin: auto;
  display: flex;

  // center spinner when loading page
  ${({ $isFullPage }) =>
    $isFullPage &&
    css`
      grid-row: 2;
    `};
`;
