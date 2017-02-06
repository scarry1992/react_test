import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './src/scripts/main.js';

window.addEventListener('load', () => {ReactDOM.render(<Hello name="Sergei"/>, document.getElementById('main'));});