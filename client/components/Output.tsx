import { Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import path from 'path';

import { RouteContext } from '../contexts/RouteContext';

const Output = (): JSX.Element => {
  const { hostname, httpRoute, port } = useContext(RouteContext);

  const route = path.resolve('/', httpRoute, 'cat_meme.gif');

  return (
    <Stack id='result' sx={{ my: 4 }}>
      <Typography variant='body1' align='center'>
        would be served at <code>{`${hostname}:${port}${route}`}</code>.
      </Typography>
    </Stack>
  );
};

export default Output;
