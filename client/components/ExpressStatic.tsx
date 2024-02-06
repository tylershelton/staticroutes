import { Paper, Stack, TextField } from '@mui/material';
import { useContext } from 'react';

import { RouteContext, RouteDispatchContext } from '../contexts/RouteContext';
import { useDispatchFromContext } from '../lib/dispatchHelpers';
import PipelineComponent from './PipelineComponent';

// declare module '@mui/material/Paper' {
//   interface PaperPropsVariantOverrides {
//     code: true;
//   }
// }

const ExpressStatic = (): JSX.Element => {
  const { httpRoute, staticDir } = useContext(RouteContext);
  const dispatch = useDispatchFromContext(RouteDispatchContext);

  function handleChangeHttpRoute (event: React.ChangeEvent<HTMLInputElement>): void {
    dispatch({
      type: 'changed_httpRoute',
      httpRoute: event.target.value,
    });
  }

  function handleChangeStaticDir (event: React.ChangeEvent<HTMLInputElement>): void {
    dispatch({
      type: 'changed_staticdir',
      staticDir: event.target.value,
    });
  }

  return (
    <PipelineComponent title='Express.js static route declaration'>
      <Paper sx={{ p: 2 }}>
        <Stack
          alignItems='center'
          direction='row'
          flexWrap='wrap'
          spacing={1}
          sx={{ rowGap: 0.5, mx: 'auto', w: '100%' }}
          useFlexGap
        >
          <pre>app.use(</pre>
          <TextField
            id='express_static_mount_path'
            label='mount path'
            variant='outlined'
            value={httpRoute}
            css={{ width: '10rem' }}
            size='small'
            onChange={handleChangeHttpRoute}
          />
          <pre>, express.static(path.resolve(__dirname,</pre>
          <TextField
            id='express_static_root'
            label='root'
            variant='outlined'
            value={staticDir}
            size='small'
            onChange={handleChangeStaticDir}
          />
          <pre>))</pre>
        </Stack>
      </Paper>
    </PipelineComponent>
  );
};

export default ExpressStatic;
