import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Router } from 'react-router-dom'

import reportWebVitals from './reportWebVitals'

import 'antd/dist/antd.css'

import { App } from './components'
import { theme } from './ui'
import { appHistory } from './utils'
import { store } from './redux'

ReactDOM.render(
  <React.StrictMode>
    <Router history={appHistory}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)

reportWebVitals()
