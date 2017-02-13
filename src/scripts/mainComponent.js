import React, {Component} from 'react';
import Hello from './main.js';
import {HelloClass} from './helloBlock.jsx';
//import Tick from './timer';
import Comment from './functionalComponents';
import Toggler from './toggler';
import Error from './warning';
import List from './list';
import StateComponent from './stageRenderComponent';
import Form from './formComponent';
import Calculator from './calculatorComponent';
import Nav from './navigation'

export default class MainComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="main">
                <Hello name="Sergei"/>
                <HelloClass name="Sergei"/>
                <Nav/>
                <Comment/>
                <Toggler/>
                <Error/>
                <List/>
                <StateComponent/>
                <Form/>
                <Calculator/>
                {this.props.children}
            </div>
        );
    }
}