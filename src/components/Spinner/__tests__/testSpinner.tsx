import { render, screen } from '@testing-library/react';
import React from 'react';

import { Spinner } from '..';

describe('Spinner', () => {
  it('should render spinner', () => {
    render(<Spinner />);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
