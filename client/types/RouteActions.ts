type RouteAction =
  | { type: 'changed_hostname'; hostname: string }
  | { type: 'changed_port'; port: string }
  | { type: 'changed_staticdir'; staticDir: string };

export default RouteAction;
