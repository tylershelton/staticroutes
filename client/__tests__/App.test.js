import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../App';

describe('<App />', () => {
  it('Renders the text "It\'s working..."', () => {
    const { getByText } = render(<App />);
    expect(getByText(/It's working\.\.\./i)).toBeInTheDocument();
  });
});
