import React from 'react';
import { render } from '@testing-library/react';
import Filter from './Filter';

test('renders learn react link', () => {
  const { getByText } = render(<Filter />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
