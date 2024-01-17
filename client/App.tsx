import { css } from '@mui/material';
import { useReducer } from 'react';

import ServerConf from './components/ServerConf';
import ExpressStatic from './components/ExpressStatic';
import RouteState from './types/RouteState';
import routeReducer from './reducers/RouteReducer';
import { RouteContext, RouteDispatchContext } from './RouteContext';
import Output from './components/Output';

const globalStyle = css({
  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  fontWeight: 400,
  fontSize: '1rem',
  color: 'rgba(0, 0, 0, 0.87)'
});

const initialRouteProps: RouteState = {
  hostname: 'localhost',
  port: '80',
  staticDir: 'static',
  httpRoute: '/'
};

const App = (): JSX.Element => {
  const [routeProps, dispatch] = useReducer(routeReducer, initialRouteProps);

  return (
    <main css={globalStyle}>
      <RouteContext.Provider value={routeProps}>
        <RouteDispatchContext.Provider value={dispatch}>
          <ServerConf />
          <hr />
          <ExpressStatic />
          <hr />
          <Output />
        </RouteDispatchContext.Provider>
      </RouteContext.Provider>
    </main>
  );
};

export default App;
