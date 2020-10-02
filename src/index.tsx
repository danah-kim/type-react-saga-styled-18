import 'core-js/stable';
import 'regenerator-runtime/runtime';

import App from './App';
import GlobalStyles from './GlobalStyles';
import * as serviceWorker from './serviceWorker';

import i18next from 'lib/i18n';
import supportLanguages from 'lib/language';
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import { Provider } from 'react-redux';
import { createStore } from 'store';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

const store = createStore();
const language = supportLanguages.getLocale(window.navigator.language);
i18next.changeLanguage(language);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
