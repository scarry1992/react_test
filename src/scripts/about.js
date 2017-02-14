import React, {Component} from 'react';

export default class AboutComponent extends Component {
    render() {
        const id = this.props.params.id,
            name = this.props.params.name;

        return (
            <div className="about">
                О сайте {id} {name}
            </div>
        );
    }
}