import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from 'react-router-dom'

import reportWebVitals from './reportWebVitals'

import 'antd/dist/antd.css'

import { App } from './components'
import { theme } from './ui'
import { appHistory } from './utils'

ReactDOM.render(
  <React.StrictMode>
    <Router history={appHistory}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)

reportWebVitals()
