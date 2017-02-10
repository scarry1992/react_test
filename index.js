import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './src/scripts/main.js';
import {HelloClass} from './src/scripts/helloBlock.jsx';
import Tick from './src/scripts/timer';
import Comment from './src/scripts/functionalComponents'
import Toggler from './src/scripts/toggler'
import Error from './src/scripts/warning'
import List from './src/scripts/list'
import StateComponent from './src/scripts/stageRenderComponent'
import Form from './src/scripts/formComponent'
import Calculator from './src/scripts/calculatorComponent'

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
    Tick();
    ReactDOM.render(<Comment
        message={props.message}
        user={props.user}/>,
        document.getElementById('comment')
    );
    ReactDOM.render(<Toggler/>, document.getElementById('toggler'));
    ReactDOM.render(<Error/>, document.getElementById('err'));
    ReactDOM.render(<List/>, document.getElementById('list'));
    ReactDOM.render(<StateComponent/>, document.getElementById('state'));
    ReactDOM.render(<Form/>, document.getElementById('form'));
    ReactDOM.render(<Calculator/>, document.getElementById('calculator'));
});