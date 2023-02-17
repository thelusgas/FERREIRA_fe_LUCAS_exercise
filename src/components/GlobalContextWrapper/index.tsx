// styles
import { GlobalStyle } from '@styles/global';
import { lightTheme } from '@styles/themes/light';
// deps
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

const queryClient = new QueryClient();

export function GlobalContextWrapper({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={lightTheme}>
        {children}
        <GlobalStyle />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
