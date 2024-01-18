import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../App';

describe('<App />', () => {
  it('Renders the text "It\'s working..."', () => {
    render(<App />);
    // screen.getByRole('');
  });
});
