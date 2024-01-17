import { css } from '@mui/material';
import { useReducer } from 'react';

import ServerConf from './components/ServerConf';
import ExpressStatic from './components/ExpressStatic';
import RouteState from './types/RouteState';
import routeReducer from './reducers/RouteReducer';
import { RouteContext, RouteDispatchContext } from './RouteContext';

const globalStyle = css({
  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  fontWeight: 400,
  fontSize: '1rem',
  color: 'rgba(0, 0, 0, 0.87)'
});

const serverSetupStyle = css({
  margin: '2rem 1rem',
  display: 'flex',
  '& p, pre': {
    whiteSpace: 'nowrap',
    margin: 'auto 0.5rem'
  }
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
          <section id='result' css={serverSetupStyle}>
            <p>-- would be served at <code>{`${routeProps.hostname}:${routeProps.port}/${routeProps.httpRoute}`}cat_meme.gif</code>.</p>
          </section>
        </RouteDispatchContext.Provider>
      </RouteContext.Provider>
    </main>
  );
};

export default App;
