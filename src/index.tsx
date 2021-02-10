import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import reportWebVitals from './reportWebVitals'

import 'antd/dist/antd.css'

import { App } from './components'
import { theme } from './ui'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

reportWebVitals()
