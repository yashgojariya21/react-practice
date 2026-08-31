import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const customeElement = React.createElement(
    'a',
    {href: 'https://google.com'},
    'Click to open google with custome element'
)

const customeButton = React.createElement(
    'button',
    {onClick: () => {
        open('https://google.com')
    }},
    'Click me!'
)

createRoot(document.getElementById('root')).render(
    // <App />
    // customeElement,
    customeButton
)
