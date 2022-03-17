import React from 'react';
import ReactDOM from 'react-dom';

import './style/index.less';
import { HashRouter } from 'react-router-dom';

import App from './App';
import { I18nProvider } from './utils/I18nProvider';

ReactDOM.render(
  <I18nProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </I18nProvider>,
  document.getElementById('root')
);
