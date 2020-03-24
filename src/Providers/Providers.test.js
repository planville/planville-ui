import React from 'react';
import { render } from '@testing-library/react';
import Providers from './Providers';

test('renders learn react link', () => {
  const { getByText } = render(<Providers />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
