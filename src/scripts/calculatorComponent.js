import React, {Component} from 'react';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {value: "", name:"celsium"};
        this.changeCelHandler = this.changeCelHandler.bind(this);
        this.changeFarHandler = this.changeFarHandler.bind(this);
    }

    changeCelHandler(value) {
        this.setState({name:"celsium", value: value});
    }

    changeFarHandler(value) {
        this.setState({name:"farengate", value: value});
    }

    render() {
        const name = this.state.name,
            value = this.state.value,
            celsium = name == 'celsium'? value: tryConvert(value, toCelsius),
            farengate = name == 'farengate'? value: tryConvert(value, toFahrenheit);

        return (
            <div className="calculator">
                <CalculatorInputComponent name="celsium" value={celsium} onChange={this.changeCelHandler}/><br/>
                <CalculatorInputComponent name="farengate" value={farengate} onChange={this.changeFarHandler}/>
            </div>
        );
    }
}

class CalculatorInputComponent extends Component {
    constructor(props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        const value = this.props.value,
            name = this.props.name;
        return (
            <fieldset>
                <legend>Is temperature in {this.props.name}</legend>
                <input type="text" name={name} value={value} onChange={this.changeHandler}/>
            </fieldset>
        );
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(value, convertToCalback) {
    const valueFloat = parseFloat(value);

    return Number.isNaN(valueFloat)? '':Math.round((convertToCalback(valueFloat)*1000)/1000);
}