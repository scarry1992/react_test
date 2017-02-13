import {Link, IndexLink} from 'react-router';
import React, {Component} from 'react';

export default class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <IndexLink to="/" activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Main</IndexLink>
                <Link to="/about">About</Link>
            </div>
        );
    }
}