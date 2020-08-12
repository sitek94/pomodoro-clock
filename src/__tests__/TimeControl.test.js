import React from 'react';
import { render } from '@testing-library/react';

import TimeControl from '../components/TimeControl';

describe('TimeControl', () => {
  test('should render correctly when break phase', () => {
    const { getByText } = render(
      <TimeControl
        value={25}
        label="break"
        onIncrement={() => {}}
        onDecrement={() => {}}
      />
    );

    expect(getByText('break length')).toBeInTheDocument();
  });

  test('should render correctly when session phase', () => {
    const { getByText } = render(
      <TimeControl
        value={25}
        label="session"
        onIncrement={() => {}}
        onDecrement={() => {}}
      />
    );

    expect(getByText('session length')).toBeInTheDocument();
  });
});
