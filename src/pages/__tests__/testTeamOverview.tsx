import { GlobalContextWrapper } from '@components/GlobalContextWrapper';
import { TeamExtended, TeamMember } from '@interfaces/data';
import { render, screen, waitFor } from '@testing-library/react';
import * as React from 'react';

import * as api from '../../api';
import { TeamOverview } from '../TeamOverview';

jest.mock('react-router-dom', () => ({
  useNavigate: () => ({}),
  useParams: () => ({
    teamId: '1',
  }),
  Link: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

jest.mock('@helpers/constants', () => ({
  baseUrl: 'www.google.com',
}));

describe('TeamOverview', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should render team overview users', async () => {
    const teamOverview = {
      id: '1',
      teamLeadId: '2',
      teamMemberIds: ['3', '4', '5'],
    };
    const userData = {
      id: '2',
      firstName: 'userData',
      lastName: '',
      displayName: 'userData',
      location: 'userData',
      avatarUrl: '',
    };
    jest
      .spyOn(api, 'getTeamExtended')
      .mockImplementationOnce(() => Promise.resolve(teamOverview as TeamExtended));
    jest
      .spyOn(api, 'getTeamMember')
      .mockImplementationOnce(() => Promise.resolve(userData as TeamMember));

    render(<TeamOverview />, { wrapper: GlobalContextWrapper });

    await waitFor(() => {
      expect(screen.queryAllByText('userData')).toHaveLength(3);
    });
  });
});
