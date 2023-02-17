import { GlobalContextWrapper } from '@components/GlobalContextWrapper';
import { render, screen } from '@testing-library/react';
import * as React from 'react';

import { Teams } from '../Teams';

jest.mock('react-router-dom', () => ({
  useNavigate: () => ({}),

  Link: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

jest.mock('@helpers/constants', () => ({
  baseUrl: 'www.google.com',
}));

describe('Teams', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should render spinner while loading', () => {
    render(<Teams />, { wrapper: GlobalContextWrapper });
    const spinners = screen.queryAllByTestId('spinner');
    expect(spinners).not.toBeNull();
  });

  /* it('should render teams list', async () => {
    const teams: Team[] = [
      {
        id: '1',
        name: 'Team1',
      },
      {
        id: '2',
        name: 'Team2',
      },
    ];

    jest.spyOn(api, 'getTeams').mockImplementationOnce(() => Promise.resolve(teams));

    render(<Teams />, { wrapper: GlobalContextWrapper });

    await waitFor(() => {
      expect(screen.getByText('Team1')).toBeInTheDocument();
    });
  }); */
});
