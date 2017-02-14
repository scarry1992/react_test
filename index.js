import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute, Link} from 'react-router';
import MainComponent from './src/scripts/mainComponent';
import About from './src/scripts/about';
import NotFound from './src/scripts/notFoundComponent';
import Home from './src/scripts/home';
import {Product, ProductItem} from './src/scripts/product';

window.addEventListener('load', () => {
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path='/' component={MainComponent}>
                <Route path='about(/:id(/:name))' component={About}/>
                <Route path='product' component={Product}>
                    <IndexRoute component={Product}/>
                    <Route path='(:id(/:name))' component={ProductItem}/>
                </Route>
                <IndexRoute component={Home}/>
            </Route>
            <Route path='*' component={NotFound}/>
        </Router>,
        document.getElementById('main'));
});