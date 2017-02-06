import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default function () {
    const elem = (
        <div>
            <h1>Now {new Date().getSeconds()}</h1>
        </div>
    );

    ReactDOM.render(elem, document.getElementById('tick'))
}