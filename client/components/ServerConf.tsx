import { Box, TextField, css } from '@mui/material';
import { useContext } from 'react';

import { RouteContext, RouteDispatchContext } from '../contexts/RouteContext';
import { useDispatchFromContext } from '../lib/dispatchHelpers';
import PipelineComponent from './PipelineComponent';

const serverSetupStyle = css({
  display: 'flex',
  '& p, pre': {
    whiteSpace: 'nowrap',
    margin: 'auto 0.5rem'
  }
});

const ServerConf = (): JSX.Element => {
  const { hostname, port, staticDir } = useContext(RouteContext);
  const dispatch = useDispatchFromContext(RouteDispatchContext);

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

  function handleChangeStaticDir (event: React.ChangeEvent<HTMLInputElement>): void {
    dispatch({
      type: 'changed_staticdir',
      staticDir: event.target.value,
    });
  }

  return (
    <PipelineComponent>
      <Box sx={{ mx: 'auto', w: '100%' }} css={serverSetupStyle}>
        <p>A cat gif saved in <code>__dirname/</code></p>
        <TextField
          id="static_directory"
          label="directory"
          variant="outlined"
          value={staticDir}
          size='small'
          onChange={handleChangeStaticDir}
        />
        <p>on a server listening at</p>
        <TextField
          id='server_hostname'
          label='hostname/ip'
          variant='outlined'
          value={hostname}
          size='small'
          onChange={handleChangeHostname}
        />
        <p>:</p>
        <TextField
          id='server_port'
          label='port'
          variant='outlined'
          value={port}
          css={{ width: '6rem' }}
          size='small'
          onChange={handleChangePort}
        />
      </Box>
    </PipelineComponent>
  );
};

export default ServerConf;
