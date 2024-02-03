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
