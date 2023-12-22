import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <strong>It&apos;s working...</strong>
  );
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);
