import routeReducer from '../../reducers/RouteReducer';
import { initialRouteState } from '../../initialState';

describe('routeReducer', () => {
  it('Should update hostname in state on `changed_hostname`', () => {
    const newHostname = 'testing.local';
    const state = routeReducer(initialRouteState, {
      type: 'changed_hostname',
      hostname: newHostname,
    });
    expect(state.hostname).toStrictEqual(newHostname);
  });

  it('Should update the route to the asset on `changed_httpRoute`', () => {
    const newRoute = '/images';
    const state = routeReducer(initialRouteState, {
      type: 'changed_httpRoute',
      httpRoute: newRoute,
    });
    expect(state.httpRoute).toStrictEqual(newRoute);
  });

  it('Should update the server port on `changed_port`', () => {
    const newPort = '9999';
    const state = routeReducer(initialRouteState, {
      type: 'changed_port',
      port: newPort,
    });
    expect(state.port).toStrictEqual(newPort);
  });

  it('Should update the static dirpath on `changed_staticdir`', () => {
    const newDir = 'assets/public';
    const state = routeReducer(initialRouteState, {
      type: 'changed_staticdir',
      staticDir: newDir,
    });
    expect(state.staticDir).toStrictEqual(newDir);
  });
});
