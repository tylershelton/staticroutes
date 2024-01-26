import { Context, render, screen } from '../test-utils';
import ExpressStatic from '../../components/ExpressStatic';

describe('<ExpressStatic />', () => {
  beforeEach(() => {
    render(<ExpressStatic />, { wrapper: Context });
  });

  it('Provides an input for specifying the route\'s mount path', () => {
    expect(screen.getByRole('textbox', { name: /mount path/i })).toBeInTheDocument();
  });

  it('Provides an input for specifying the local static directory', () => {
    expect(screen.getByRole('textbox', { name: /root/i })).toBeInTheDocument();
  });
});
