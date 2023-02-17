import { GlobalContextWrapper } from '@components/GlobalContextWrapper';
import { lightTheme } from '@styles/themes/light';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import * as React from 'react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

export function AllTheProviders({ children }: { children: ReactNode }) {
  return (
    <GlobalContextWrapper>
      <MemoryRouter>{children}</MemoryRouter>
    </GlobalContextWrapper>
  );
}

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
  });

export function renderWithClient(ui: React.ReactElement) {
  const testQueryClient = createTestQueryClient();
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>
      <MemoryRouter>
        <ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>
      </MemoryRouter>
    </QueryClientProvider>
  );
  return {
    ...result,
    rerender: (rerenderUi: React.ReactElement) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          <MemoryRouter>
            <ThemeProvider theme={lightTheme}>{rerenderUi}</ThemeProvider>
          </MemoryRouter>
        </QueryClientProvider>
      ),
  };
}
