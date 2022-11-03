import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createTheme, ThemeProvider, Typography} from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      light: '#DF57BC',
      main: '#A03E99',
      dark: '#371E30'
    },
  typography: {
    fontSize: '2rem'
  }
    
  },

})
// add typography size 1.5 rem

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
)
