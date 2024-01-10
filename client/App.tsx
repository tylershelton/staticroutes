import { JSX } from 'react/jsx-runtime';

const App = (): JSX.Element => {
  return (
    <main>
      <p>A cat gif stored at <code>__dirname/static/cat_meme.gif</code> --</p>
      <pre>app.use(&lt;mount path&gt;, express.static(&lt;root&gt;))</pre>
      <p>-- will be served at <code>hostname:port/&lt;result&gt;</code></p>
    </main>
  );
};

export default App;
