// styles
import { GlobalStyle } from '@styles/global';
import { lightTheme } from '@styles/themes/light';
// deps
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// router
import { router } from './routes';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={lightTheme}>
        <RouterProvider router={router} />
        <GlobalStyle />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
