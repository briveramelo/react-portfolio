import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
            light: '#788df5',
            dark: '#344aa8',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#ff4081',
            light: '#ff79b0',
            dark: '#c60055',
            contrastText: '#ffffff',
        },
        background: {
            default: '#f5f5f5', // Neutral light gray for overall page background
            paper: '#ffffff',  // White for cards and surfaces
            dark: '#2c2c2c',   // Custom dark gray for sections
            stone: '#eae7dc',  // Custom off-white stone for sections
        },
        text: {
            primary: '#212121',
            secondary: '#757575',
            disabled: '#bdbdbd',
        },
    },
    typography: {
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        h1: { fontSize: '2.5rem', fontWeight: 700 },
        h2: { fontSize: '2rem', fontWeight: 700 },
        h3: { fontSize: '1.75rem', fontWeight: 700 },
        h4: { fontSize: '1.5rem', fontWeight: 600 },
        h5: { fontSize: '1.25rem', fontWeight: 600 },
        h6: { fontSize: '1rem', fontWeight: 500 },
        body1: { fontSize: '1rem', fontWeight: 400 },
        body2: { fontSize: '0.875rem', fontWeight: 400 },
        button: { fontSize: '0.875rem', fontWeight: 500 },
    },
});



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
)
