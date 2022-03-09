import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.less'
import App from './App'
import { HashRouter } from 'react-router-dom';
import { I18nProvider } from './utils/I18nProvider';

ReactDOM.render(
  <React.StrictMode>
    <I18nProvider>
      <HashRouter>
        <App/>
      </HashRouter>
    </I18nProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
