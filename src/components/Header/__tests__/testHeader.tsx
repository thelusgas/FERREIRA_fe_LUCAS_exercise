import { fireEvent, render, screen } from '@testing-library/react';
import { AllTheProviders } from '@tests/utils';
import * as React from 'react';

import { Header } from '..';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('Header', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should render header', () => {
    render(<Header title="Header" />, { wrapper: AllTheProviders });

    expect(screen.getByText('Header')).toBeInTheDocument();
  });

  it('should render back button in header', () => {
    render(<Header title="Header" showBackButton />, { wrapper: AllTheProviders });

    const button = screen.queryByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should not render back button in header', () => {
    render(<Header title="Header" showBackButton={false} />, { wrapper: AllTheProviders });

    const button = screen.queryByRole('button');
    expect(button).toBeNull();
  });

  it('should navigate back when back button is clicked', () => {
    render(<Header title="Header" showBackButton />, { wrapper: AllTheProviders });

    fireEvent.click(screen.getByRole('button'));

    expect(mockUseNavigate).toHaveBeenCalled();
  });
});
