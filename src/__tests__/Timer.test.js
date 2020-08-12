import React from 'react';
import { render } from '@testing-library/react';

import Timer from '../components/Timer';

describe('Timer', () => {
  test('should render correctly in break phase', () => {
    const { getByText } = render(<Timer value={1500} phase="break" />);

    expect(getByText('Break')).toBeInTheDocument();
    expect(getByText('25:00')).toBeInTheDocument();
  });

  test('should render correctly in session phase', () => {
    const { getByText } = render(<Timer value={1500} phase="session" />);

    expect(getByText('Session')).toBeInTheDocument();
  });
});
