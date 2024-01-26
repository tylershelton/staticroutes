import { Context, render, screen } from '../test-utils';
import ServerConf from '../../components/ServerConf';

describe('<ServerConf />', () => {
  beforeEach(() => {
    render(<ServerConf />, { wrapper: Context });
  });

  it('Provides an input for specifying the local static assets directory', () => {
    expect(screen.getByRole('textbox', { name: /directory/i })).toBeInTheDocument();
  });

  it('Provides an input for specifying the server hostname', () => {
    expect(screen.getByRole('textbox', { name: /hostname\/ip/i })).toBeInTheDocument();
  });

  it('Provides an input for specifying the port the server listens on', () => {
    expect(screen.getByRole('textbox', { name: /port/i })).toBeInTheDocument();
  });
});
