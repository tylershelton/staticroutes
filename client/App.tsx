// external libs/dependencies
import { Stack } from '@mui/material';
import { useReducer } from 'react';

// internal libs/dependencies
import { RouteContext, RouteDispatchContext } from './contexts/RouteContext';
import { initialRouteState } from './initialState';
import routeReducer from './reducers/RouteReducer';

// internal components
import ServerConf from './components/ServerConf';
import ExpressStatic from './components/ExpressStatic';
import Output from './components/Output';
import { initialRouteState } from './initialState';

const globalStyle = css({
  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  fontWeight: 400,
  fontSize: '1rem',
  color: 'rgba(0, 0, 0, 0.87)'
});

const App = (): JSX.Element => {
  const [routeState, dispatch] = useReducer(routeReducer, initialRouteState);

  return (
      <RouteContext.Provider value={routeState}>
        <RouteDispatchContext.Provider value={dispatch}>
        <Stack>
          <ServerConf />
          <ExpressStatic />
          <Output />
        </Stack>
        </RouteDispatchContext.Provider>
      </RouteContext.Provider>
  );
};

export default App;
