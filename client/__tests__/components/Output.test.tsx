import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { RouteContext } from '../../contexts/RouteContext';
import { useReducer } from 'react';
import routeReducer from '../../reducers/RouteReducer';
import RouteState from '../../types/RouteState';

import Output from '../../components/Output';

const initialRouteState: RouteState = {
  hostname: 'testing.local',
  port: '8080',
  staticDir: 'public',
  httpRoute: 'images'
};

const Context = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [routeState] = useReducer(routeReducer, initialRouteState);
  return (
    <RouteContext.Provider value={routeState}>
      {children}
    </RouteContext.Provider>
  );
};

describe('<Output />', () => {
  beforeEach(() => {
    render(<Output />, { wrapper: Context });
  });

  it('Correctly forms RouteState data into a URI', () => {
    expect(screen.getByText('testing.local:8080/images/cat_meme.gif')).toBeInTheDocument();
  });
});
