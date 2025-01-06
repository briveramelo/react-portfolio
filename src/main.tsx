import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // Import Tailwind

import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: '#62BA1B', // todo: change
        },
        secondary: {
            main: '#000AFF', // todo: change
        },
    },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
)
