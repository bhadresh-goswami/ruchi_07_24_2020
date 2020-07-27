import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const hender1 = getByText(<h1></h1>);
  const hender2 = getByText(<h2></h2>);
  expect(hender1).toBeInTheDocument();
  expect(hender2).toBeInTheDocument();
});
