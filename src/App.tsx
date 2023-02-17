import { GlobalContextWrapper } from '@components/GlobalContextWrapper';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes';

export function App() {
  return (
    <GlobalContextWrapper>
      <RouterProvider router={router} />
    </GlobalContextWrapper>
  );
}
