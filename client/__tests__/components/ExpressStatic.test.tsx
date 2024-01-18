import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { RouteContext, RouteDispatchContext } from '../../contexts/RouteContext';
import { initialRouteState } from '../../initialState';
import { useReducer } from 'react';
import routeReducer from '../../reducers/RouteReducer';

import ExpressStatic from '../../components/ExpressStatic';

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
