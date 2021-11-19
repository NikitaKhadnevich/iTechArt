import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import appTheme from './globalStyles';
import App from './App';
import store from './store';

const container = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={appTheme}>
      <App />
    </ThemeProvider>
    ,
  </Provider>,
  container
);
