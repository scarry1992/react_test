import React, {Component} from 'react';

let name = 'Sergei';
export const greetins = (
    <div>
        <h1>Hello, <i>{name}</i></h1>
    </div>
);

export class HelloClass extends Component {
    render() {
        return (
            <div className="qewqew">
                <h1>Hello, <i>{this.props.name}</i></h1>
            </div>
        );
    }
}