import { useContext } from 'react';
import RouteAction from '../types/RouteActions';

// At the time we define RouteDispatchContext, we don't have a dispatch
// function to pass in as an initial state, so we set its typing to allow
// for the state to be `null`. In order for us to actually be able to call
// the function once the app is running without being beset by TypeScript errors,
// we need to have stripped away that null typing -- useDispatchFromContext
// does that for us.
export const useDispatchFromContext = (
  context: React.Context<React.Dispatch<RouteAction> | null>
) => {
  const dispatch = useContext(context);
  if (!dispatch) throw new Error('useDispatchFromContext must be used from within a Provider');
  return dispatch;
};
