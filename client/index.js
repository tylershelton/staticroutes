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
    components: {
      MuiPaper: {
        variants: [
          {
            props: { variant: 'code' },
            style: {
              backgroundColor: '#2E3440',
              color: '#D3DEE9',
            }
          }
        ],
      },
    },
  },
  typography: {
    fontSize: 18,
  }
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
