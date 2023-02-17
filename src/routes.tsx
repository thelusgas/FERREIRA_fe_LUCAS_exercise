// pages
import { TeamMemberOverview } from '@pages/TeamMemberOverview';
import { TeamOverview } from '@pages/TeamOverview';
import { Teams } from '@pages/Teams';
// deps
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Teams />,
  },
  {
    path: '/team/:teamId',
    element: <TeamOverview />,
  },
  {
    path: '/user/:memberId',
    element: <TeamMemberOverview />,
  },
]);
