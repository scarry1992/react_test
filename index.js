import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute, Link} from 'react-router';
import MainComponent from './src/scripts/mainComponent';
import About from './src/scripts/about';
import NotFound from './src/scripts/notFoundComponent';
import Home from './src/scripts/home';

window.addEventListener('load', () => {
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path='/' component={MainComponent}>
                <Route path='about' component={About}/>
                <IndexRoute component={Home}/>
            </Route>
            <Route path='*' component={NotFound}/>
        </Router>,
        document.getElementById('main'));
});