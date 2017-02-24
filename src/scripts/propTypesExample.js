import React, {Component} from 'react';

export default class SortList extends Component{
    constructor(props) {
        super(props);
        this.state = {find: ''};
        this.changeHandler = this.changeHandler.bind(this);
    }

    static get propTypes() {
        return {
            elements: React.PropTypes.array.isRequired
        }
    }

    changeHandler(e) {
        this.setState({find: e.target.value});
    }

    render() {
        let values;

        if (this.props.elements.length > 0) {
            values = this.props.elements.filter((value, key) => value.includes(this.state.find, 0));
        } else {
            values[0] = 'No Elements';
        }

        return (
            <div className="sort-list">
                <input type="text" name="find" value={this.state.find} onChange={this.changeHandler}/>
                <ul>
                    {values.map((value, key) => (<li key={key}>{value}</li>))}
                </ul>
            </div>
        )
    }
}