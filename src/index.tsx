import ReactDOM from 'react-dom';
import App from './App';

import { HashRouter } from 'react-router-dom';

import {Provider} from 'react-redux';
import {store} from './app/store';

import { ThemeProvider } from 'styled-components';
import {GlobalStyle} from './theme/globalStyle';
import {Theme} from './theme/theme'

ReactDOM.render(
  <HashRouter basename='/'>
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <GlobalStyle></GlobalStyle>
        <App />
      </ThemeProvider>
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);