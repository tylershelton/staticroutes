import { Box, css } from '@mui/material';
import { useContext } from 'react';
import { RouteContext } from '../contexts/RouteContext';
import path from 'path';

const serverSetupStyle = css({
  margin: '2rem 1rem',
  display: 'flex',
  '& p, pre': {
    whiteSpace: 'nowrap',
    margin: 'auto 0.5rem'
  }
});

const Output = (): JSX.Element => {
  const { hostname, httpRoute, port } = useContext(RouteContext);

  const route = path.resolve('/', httpRoute, 'cat_meme.gif');

  return (
    <Box id='result' css={serverSetupStyle}>
      <p>-- would be served at <code>{`${hostname}:${port}${route}`}</code>.</p>
    </Box>
  );
};

export default Output;
