import { createContext } from 'react';
import RouteState from './types/RouteState';
import RouteAction from './types/RouteActions';

export const RouteContext = createContext<RouteState>({
  hostname: 'localhost',
  port: '80',
  staticDir: 'static',
  httpRoute: ''
});

export const RouteDispatchContext = createContext<React.Dispatch<RouteAction> | null>(null);
