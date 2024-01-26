import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { useReducer } from 'react';
import { RouteContext, RouteDispatchContext } from '../contexts/RouteContext';
import routeReducer from '../reducers/RouteReducer';
import RouteState from '../types/RouteState';

const initialRouteState: RouteState = {
  hostname: 'testing.local',
  port: '8080',
  staticDir: 'public',
  httpRoute: 'images'
};

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

export { React, Context, render, screen };
