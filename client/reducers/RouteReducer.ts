import RouteAction from '../types/RouteActions';
import RouteState from '../types/RouteState';

function routeReducer (routeState: RouteState, action: RouteAction): RouteState {
  switch (action.type) {
    case 'changed_hostname': {
      return {
        ...routeState,
        hostname: action.hostname,
      };
    }
    case 'changed_httpRoute': {
      return {
        ...routeState,
        httpRoute: action.httpRoute,
      };
    }
    case 'changed_port': {
      return {
        ...routeState,
        port: action.port,
      };
    }
    case 'changed_staticdir': {
      return {
        ...routeState,
        staticDir: action.staticDir,
      };
    }
  }
}

export default routeReducer;
