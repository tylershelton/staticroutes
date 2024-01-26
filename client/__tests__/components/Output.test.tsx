import { Context, render, screen } from '../test-utils';
import Output from '../../components/Output';

describe('<Output />', () => {
  beforeEach(() => {
    render(<Output />, { wrapper: Context });
  });

  it('Correctly forms RouteState data into a URI', () => {
    expect(screen.getByText('testing.local:8080/images/cat_meme.gif')).toBeInTheDocument();
  });
});
