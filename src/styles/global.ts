import { createGlobalStyle } from 'styled-components';

import { fontFamiles, fontSizes, fontWeights } from './abstracts';
import { reset } from './reset';

const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
  ${reset};

  :root {
    ${fontFamiles};
    ${fontWeights};
    ${fontSizes};
  }

  body {
    font-family: var(--font-family-primary);
    font-size: var(--font-family-secondary);

    & > #root {
      min-height: 100vh;
      @supports (height: 100dvh) {
        min-height: 100dvh;
      }

      display: grid;
      grid-template-rows: auto 1fr;
      gap: 2rem;

      background: ${({ theme }) => theme.color.background};
      color: ${({ theme }) => theme.color.onBackground};
    }
  }
`;
