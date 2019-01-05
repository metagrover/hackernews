import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './styles.css';

ReactDOM.render(<App />, document.getElementById('root'));

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}
