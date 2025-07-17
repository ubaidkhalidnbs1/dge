import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './i18n';

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { BrowserRouter } from 'react-router-dom';
import { LANGUAGE } from '@/constants/language';
import { LAYOUT_DIRECTION } from '@/constants';

const createEmotionCache = (dir = LAYOUT_DIRECTION.LTR) =>
  createCache({
    key: dir === LAYOUT_DIRECTION.RTL ? 'muirtl' : 'mui',
    stylisPlugins: dir === LAYOUT_DIRECTION.RTL ? [require('stylis-plugin-rtl')()] : [],
  });

const AppWrapper = () => {
  const lang = i18n.language;
  const direction = lang === LANGUAGE.AR ? LAYOUT_DIRECTION.RTL : LAYOUT_DIRECTION.LTR;
  const theme = createTheme({ direction });
  const cache = createEmotionCache(direction);
  document.documentElement.dir = direction;

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </CacheProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <AppWrapper />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
