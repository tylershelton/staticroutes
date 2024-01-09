import { JSX } from 'react/jsx-runtime';

const App = (): JSX.Element => {
  return (
    <main>
      <p>A cat gif stored at __dirname/static/cat_meme.gif --</p>
      <p>app.use(&lt;mount path&gt;, express.static(&lt;root&gt;))</p>
      <p>-- will be served at hostname:port/&lt;result&gt;</p>
    </main>
  );
};

export default App;
