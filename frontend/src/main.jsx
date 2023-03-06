import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { theme } from './theme/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
