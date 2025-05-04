import React from 'react';
import ReactDOM from 'react-dom/client';
import MyComponent from './MyComponent';
import App from './App';

document.addEventListener('DOMContentLoaded',()=>{
    const container = document.getElementById('react-root');
    
    if (!container){
        throw new Error('React root element not found');
    }

    const root = ReactDOM.createRoot(document.getElementById('react-root'));
    root.render(<App />);
})
