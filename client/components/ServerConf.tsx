import { TextField, css } from '@mui/material';
import { useContext } from 'react';
import { RouteContext, RouteDispatchContext } from '../RouteContext';

const serverSetupStyle = css({
  margin: '2rem 1rem',
  display: 'flex',
  '& p, pre': {
    whiteSpace: 'nowrap',
    margin: 'auto 0.5rem'
  }
});

// At the time we define RouteDispatchContext, we don't have a dispatch
// function to pass in as an initial state, so we set its typing to allow
// for the state to be `null`. In order for us to actually be able to call
// the function once the app is running without being beset by TypeScript errors,
// we need to have stripped away that null typing -- useDispatchFromContext
// does that for us.
const useDispatchFromContext = () => {
  const dispatch = useContext(RouteDispatchContext);
  if (!dispatch) throw new Error('useDispatchFromContext must be used from within a Provider');
  return dispatch;
};

const ServerConf = (): JSX.Element => {
  const { hostname, port, staticDir } = useContext(RouteContext);
  const dispatch = useDispatchFromContext();

  function handleChangeHostname (event: React.ChangeEvent<HTMLInputElement>): void {
    dispatch({
      type: 'changed_hostname',
      hostname: event.target.value,
    });
  }

  function handleChangePort (event: React.ChangeEvent<HTMLInputElement>): void {
    dispatch({
      type: 'changed_port',
      port: event.target.value,
    });
  }

  function handleChangeFilepath (event: React.ChangeEvent<HTMLInputElement>): void {
    dispatch({
      type: 'changed_staticdir',
      staticDir: event.target.value,
    });
  }

  return (
    <section id='server_setup' css={serverSetupStyle}>
      <p>Given a server listening at</p>
      <TextField
        id='server_hostname'
        label='hostname/ip'
        variant='outlined'
        defaultValue={hostname}
        size='small'
        onChange={handleChangeHostname}
      />
      <p>:</p>
      <TextField
        id='sever_port'
        label='port'
        variant='outlined'
        defaultValue={port}
        css={{ width: '6rem' }}
        size='small'
        onChange={handleChangePort}
      />
      <p>, a cat gif stored at <code>__dirname/</code></p>
      <TextField
        id="local_filepath"
        label="filepath"
        variant="outlined"
        defaultValue={staticDir}
        size='small'
        onChange={handleChangeFilepath}
      />
      <p>--</p>
    </section>
  );
};

export default ServerConf;
