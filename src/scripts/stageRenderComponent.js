import React, {Component} from 'react'

export default class StageRenderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {label: 'off'};
        this.click = this.click.bind(this);
        console.log('constructor');
    }

    componentWillReciveProps(newProps) {
        /*вызывается при обновлении объекта props. Как правило,
        в этой функции устанавливаются те свойства компонента, в том числе из this.state,
         которые зависят от значений из props.*/
        console.log('componentWillReciveProps');
    }

    componentWillMount() { //вызывается перед рендером компонента
        console.log('componentWillMount');
    }

    componentDidMount() { //вызывается сразу после рендера компонента(можно выполнять запросы к удаленке)
        console.log('componentDidMount');
    }

    componentWillUnmount() { //вызывается после удаления компонента из DOM
        console.log('componentWillUnmount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        /*вызывается при каждом обновления props или state
        (возвращает true если надо делать обновление или false игнорировать обнову)*/
        console.log('shouldComponentUpdate');
        return true;
    }

    componentWillUpdate(nextProps, nextState) {// вызывается перед обновлением компонента (если shouldComponentUpdate - true)
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) { // вызывается после обновления компонента (если shouldComponentUpdate - true)
        console.log('componentDidUpdate');
    }

    click(e) {
        const newLabel = this.state.label == 'off'? 'on': 'off';
        this.setState({label: newLabel});
    }

    render() {
        console.log('render');
        return (<button onClick={this.click}>{this.state.label}</button>);
    }
    /*При стартовом рендере: constructor - componentWillMount - render - componentDidMount
    * При обнове: shouldComponentUpdate - componentWillUpdate - render - componentDidUpdate*/
}