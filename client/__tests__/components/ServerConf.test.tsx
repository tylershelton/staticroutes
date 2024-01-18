import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import ServerConf from '../../components/ServerConf';
import { RouteContext, RouteDispatchContext } from '../../contexts/RouteContext';
import { initialRouteState } from '../../initialState';
import { useReducer } from 'react';
import routeReducer from '../../reducers/RouteReducer';

const Context = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [routeState, dispatch] = useReducer(routeReducer, initialRouteState);
  return (
    <RouteContext.Provider value={routeState}>
      <RouteDispatchContext.Provider value={dispatch}>
        {children}
      </RouteDispatchContext.Provider>
    </RouteContext.Provider>
  );
};


describe('<ServerConf />', () => {
  beforeEach(() => {
    render(<ServerConf />, { wrapper: Context });
  });

  it('Provides an input for specifying the local static assets directory...', () => {
    expect(screen.getByRole('textbox', { name: /directory/i })).toBeInTheDocument();
  });

  it('Provides an input for specifying the server hostname...', () => {
    expect(screen.getByRole('textbox', { name: /hostname_ip/i })).toBeInTheDocument();
  });

  it('Provides an input for specifying the port the server listens on...', () => {
    expect(screen.getByRole('textbox', { name: /port/i })).toBeInTheDocument();
  });
});
