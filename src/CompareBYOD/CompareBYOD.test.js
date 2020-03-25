import React from 'react';
import { render } from '@testing-library/react';
import CompareBYOD from './CompareBYOD';

test('renders learn react link', () => {
  const { getByText } = render(<CompareBYOD />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
