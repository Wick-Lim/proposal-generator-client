import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <style>{`
        html, body, #root {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
      `}</style>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
