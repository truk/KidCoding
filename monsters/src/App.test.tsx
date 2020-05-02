import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders a button to begin a battle', () => {
  const { getByText } = render(<App />);
  const buttonElement = getByText(/battle/i);
  expect(buttonElement).toBeInTheDocument();
});
