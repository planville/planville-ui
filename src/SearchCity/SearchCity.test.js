import React from 'react';
import { render } from '@testing-library/react';
import SearchCity from './SearchCity';

test('renders learn react link', () => {
  const { getByText } = render(<SearchCity />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
