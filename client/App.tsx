import { TextField, css } from '@mui/material';

const globalStyle = css({
  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  fontWeight: 400,
  fontSize: '1rem',
  color: 'rgba(0, 0, 0, 0.87)'
});

const serverSetupStyle = css({
  margin: '2rem 1rem',
  display: 'flex',
  '& p, pre': {
    whiteSpace: 'nowrap',
    margin: 'auto 0.5rem'
  }
});

const initialRouteProps: RouteState = {
  hostname: 'localhost',
  port: '80',
  staticDir: 'static',
  httpRoute: ''
};

const App = (): JSX.Element => {
  return (
    <main css={globalStyle}>
      <section id='server_setup' css={serverSetupStyle}>
        <p>Given a server listening at</p>
        <TextField
          id='server_hostname'
          label='hostname/ip'
          variant='outlined'
          defaultValue='localhost'
          size='small'
        />
        <p>:</p>
        <TextField
          id='sever_port'
          label='port'
          variant='outlined'
          defaultValue='80'
          css={{ width: '6rem' }}
          size='small'
        />
        <p>, a cat gif stored at <code>__dirname/</code></p>
        <TextField
          id="local_filepath"
          label="filepath"
          variant="outlined"
          defaultValue="static"
          size='small'
        />
        <p>--</p>
      </section>
      <section id='express_static_setup' css={serverSetupStyle}>
        <pre>app.use(</pre>
        <TextField
          id='express_static_mount_path'
          label='mount path'
          variant='outlined'
          defaultValue='/'
          css={{ width: '10rem'}}
          size='small'
        />
            <pre>, express.static(path.join(__dirname,</pre>
        <TextField
          id='express_static_root'
          label='root'
          variant='outlined'
              defaultValue={routeProps.staticDir}
          size='small'
        />
        <pre>))</pre>
      </section>
      <section id='result' css={serverSetupStyle}>
        <p>-- would be served at <code>hostname:port/&lt;result&gt;/cat_meme.gif</code>.</p>
      </section>
    </main>
  );
};

export default App;
