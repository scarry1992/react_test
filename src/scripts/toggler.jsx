import React, {Component} from 'react';

export default class Toggler extends Component {
    constructor(props) {
        super(props);
        this.state = {isTogledOn: true};
        this.handleClick = this.handleClick.bind(this);//надо привязывать. рекомендуемый способ
    }

    handleClick() {
        this.setState(prevState => ({
                isTogledOn: !prevState.isTogledOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isTogledOn?'on':'off'}
            </button>
        );
    }
}