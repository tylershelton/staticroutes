import RouteAction from '../types/RouteActions';
import RouteState from '../types/RouteState';

function routeReducer (routeProps: RouteState, action: RouteAction): RouteState {
  switch (action.type) {
    case 'changed_hostname': {
      return {
        ...routeProps,
        hostname: action.hostname,
      };
    }
    case 'changed_port': {
      return {
        ...routeProps,
        port: action.port,
      };
    }
    case 'changed_staticdir': {
      return {
        ...routeProps,
        staticDir: action.staticDir,
      };
    }
  }
}

export default routeReducer;
