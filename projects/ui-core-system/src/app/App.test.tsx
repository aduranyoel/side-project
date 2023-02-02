import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

describe('App', function() {
  test('should render', () => {
    const { getByText } = render(<App/>);
    expect(getByText(/hello world/i)).toBeInTheDocument();
  });
});
