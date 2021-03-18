import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import './index.css'
import 'fontsource-roboto'
import App from './App'
import { theme } from './theme/style'

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
