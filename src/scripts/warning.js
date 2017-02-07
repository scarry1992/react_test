import React, {Component} from 'react';

function ErrMsgComponent(props) {
    if (!props.err) {
        return null;
    }

    return (
        <div className="err">
            {props.err}
        </div>
    );
}

export default class Error extends Component {
    constructor(props) {
        super(props);
        this.state = {isShown: false};
        this.clickHandler = this.clickHandler.bind(this);
    }

    componentDidMount() {
        this.setState({
            isShown:true
        });
    }

    componentWillUnmount() {
        this.setState({isShown: false});
    }

    clickHandler(e) {
        this.setState((prev) => ({isShown: !prev.isShown}));
    }

    render() {
        const isShown = this.state.isShown;
        return (
            <div>
            {isShown ? (  //пример условного оператора
                <ErrMsgComponent err={'Error 404'}/>
                ):(
                    <ErrMsgComponent/>
                )}
                <button onClick={this.clickHandler}>
                    Click
                </button>
            </div>
        );
    }
}