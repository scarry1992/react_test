import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './src/scripts/main.js';
import {HelloClass} from './src/scripts/helloBlock.jsx';
import Tick from './src/scripts/timer';
import Comment from './src/scripts/functionalComponents'

let props = {
    message: 'No Message',
    user: {
        name: "No Name",
        alt: "No Image",
        img: "/assets/img/noimg.png"
    }
};

window.addEventListener('load', () => {
    ReactDOM.render(<Hello name="Sergei"/>, document.getElementById('main'));
    ReactDOM.render(<HelloClass name="Sergei"/>, document.getElementById('root'));
    setInterval(Tick, 1000);
    ReactDOM.render(<Comment
        message={props.message}
        user={props.user}/>,
        document.getElementById('comment')
    );
});