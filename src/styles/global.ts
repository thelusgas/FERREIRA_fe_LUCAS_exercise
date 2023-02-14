import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';

import { fontSizes, fontFamiles, fontWeights } from './abstracts/font';

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
      grid-template-rows: auto 1fr auto;
    }
  }
`;
