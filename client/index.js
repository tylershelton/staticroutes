import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import App from './App.tsx';

const theme = createTheme({
  palette: {
    primary: {
      main: '#88C0D0',
    },
    background: {
      default: '#ECEFF4',
      paper: '#E5E9F0',
    },
    text: {
      primary: '#2E3440',
    },
  },
});

const root = createRoot(document.getElementById('app'));
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
