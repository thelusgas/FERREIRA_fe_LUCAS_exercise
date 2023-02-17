import * as api from '@api/index';
import { GlobalContextWrapper } from '@components/GlobalContextWrapper';
import { TeamMember } from '@interfaces/data';
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import { TeamMemberOverview } from '../TeamMemberOverview';

jest.mock('react-router-dom', () => ({
  useNavigate: () => ({}),
  useParams: () => ({
    memberId: '1',
  }),
  Link: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

jest.mock('@helpers/constants', () => ({
  baseUrl: 'www.google.com',
}));

describe('TeamMemberOverview', () => {
  it('should render UserOverview', async () => {
    const userData = {
      id: '2',
      firstName: 'test',
      lastName: 'user',
      displayName: 'userName',
      location: 'location',
      avatarUrl: '',
    };

    jest
      .spyOn(api, 'getTeamMember')
      .mockImplementationOnce(() => Promise.resolve(userData as TeamMember));

    render(<TeamMemberOverview />, { wrapper: GlobalContextWrapper });

    await waitFor(() => {
      expect(screen.queryByTestId('member-card__name--2')).toHaveTextContent('test user');
      expect(screen.queryByTestId('member-card__display-name--2')).toHaveTextContent('userName');
      expect(screen.queryByTestId('member-card__location--2')).toHaveTextContent('location');
    });
  });
});
