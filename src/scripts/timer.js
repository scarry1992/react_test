import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class SecComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(), count: 0}
    }

    componentDidMount() {
        this.timerId = setInterval(
            ()=>this.tick(),
            this.props.delay
        );
        this.countTimerId = setInterval(
            ()=>this.count(),
            this.props.delay
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
        clearInterval(this.countTimerId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    count() {
        this.setState((prev, props)=>({
            count: prev.count + props.inc
        }));
    }

    render() {
        return (
            <div>
                <FormattedComponent date={this.state.date}/>
                <h1>{this.state.count}</h1>
            </div>
        );
    }
}

function FormattedComponent(props) {
    return (<h1>{props.date.getSeconds()}</h1>);
}

export default function () {
    ReactDOM.render(<SecComponent delay={2000} inc={5}/>, document.getElementById('tick'));
}