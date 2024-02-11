import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { SWRConfig } from 'swr';
import { fetcher } from './utils/fetcher';
import { ThemeContextProvider } from './contexts/ThemeContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <App />
      </SWRConfig>
    </ThemeContextProvider>
  </React.StrictMode>
);
