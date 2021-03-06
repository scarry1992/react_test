import React, {Component} from 'react';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.items = props.items;
    }

    static get defaultProps() {// надо так!
        return {items:[9,8,7,6,5]};
    }

    render() {
        /*key нужен для ускорения перестройки дома(при вынесении key в отдельный компонент не заработало)
        * обязательно инициализировать здесь
        * key не рендериться в дереве*/
        //const items = this.items.map((item) => <ListElement key={item.toString()} item={item}/>);
        return (
            <ul>
                {this.items.map((item) => <ListElement key={item.toString()} item={item}/>)}
            </ul>
        );
    }
}

function ListElement(props) {
    return (
        <li>{props.item}</li>
    );
}