import { Team } from '@interfaces/data';
import { render, screen } from '@testing-library/react';
import { AllTheProviders } from '@tests/utils';
import * as React from 'react';

import { Card } from '..';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('Card', () => {
  it('should render as div when not given an url param', () => {
    const team: Team = {
      id: '1',
      name: 'Team 1',
    };
    render(<Card id={team.id}>{team.name}</Card>, { wrapper: AllTheProviders });

    const cardContainer = screen.getByTestId(`cardContainer-${team.id}`);
    expect(cardContainer).toBeInTheDocument();
    expect(cardContainer.tagName).toBe('DIV');
  });
  it('should render as anchor when given an url param', () => {
    const team: Team = {
      id: '1',
      name: 'Team 1',
    };
    render(
      <Card id={team.id} url={`/teams/${team.id}`}>
        {team.name}
      </Card>,
      { wrapper: AllTheProviders }
    );

    const cardContainer = screen.getByTestId(`cardContainer-${team.id}`);
    expect(cardContainer).toBeInTheDocument();
    expect(cardContainer.tagName).toBe('A');
  });
});
