import { render, screen } from '@testing-library/react';
import { AllTheProviders } from '@tests/utils';
import React from 'react';

import { Spinner } from '..';

describe('Spinner', () => {
  it('should render spinner', () => {
    render(<Spinner />, { wrapper: AllTheProviders });

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
