import { TextField, css } from '@mui/material';
import { useContext } from 'react';
import { RouteContext, RouteDispatchContext } from '../contexts/RouteContext';
import { useDispatchFromContext } from '../lib/dispatchHelpers';

const serverSetupStyle = css({
  margin: '2rem 1rem',
  display: 'flex',
  '& p, pre': {
    whiteSpace: 'nowrap',
    margin: 'auto 0.5rem'
  }
});


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
    <section id='express_static_setup' css={serverSetupStyle}>
      <pre>app.use(</pre>
      <TextField
        id='express_static_mount_path'
        label='mount path'
        variant='outlined'
        value={httpRoute}
        css={{ width: '10rem'}}
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
    </section>
  );
};

export default ExpressStatic;
