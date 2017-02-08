import React, {Component} from 'react';

// export default class FormComponent extends Component {//Пример с value в input
//     constructor(props) {
//         super(props);
//         this.state = {userName: '', userAge: '', hasErr: false, errMsg: ''};
//         this.submitHandler = this.submitHandler.bind(this);
//         this.changeHandler = this.changeHandler.bind(this);
//     }
//
//     submitHandler(e) {
//         e.preventDefault();
//         console.log(`Name: ${this.state.userName} Age: ${this.state.userAge}`);
//     }
//
//     changeHandler(e) {
//         const nameAttr = e.target.name,
//               valueAttr = e.target.value,
//               err = validate(nameAttr, valueAttr),
//               obj = {};
//
//         if (err.hasErr) {
//             this.setState(err);
//             return;
//         } else {
//             Object.assign(obj, err);
//         }
//
//         obj[nameAttr] = valueAttr;
//         this.setState(obj);
//     }
//
//     render() {
//         return (//весь прикол в привязке value к state
//             <form onSubmit={this.submitHandler}>
//                 <p>
//                     <label htmlFor="name">Имя</label><br/>
//                     <input id="name" type="text" value={this.state.userName} name="userName" onChange={this.changeHandler}/>
//                 </p>
//                 <p>
//                     <label htmlFor="age">Возвраст</label><br/>
//                     <input id="age" type="text" value={this.state.userAge} name="userAge" onChange={this.changeHandler}/>
//                 </p>
//                 <input type="submit" value="Send"/>
//                 {this.state.hasErr ? (<p className="Error">{this.state.errMsg}</p>):(<p></p>)}
//             </form>
//         );
//     }
// }

function validate(name, value) {
    let returnObj = {hasErr: false, errMsg: ''};

    switch (name) {
        case 'userName': {
            if (value.length != 0 && value[0].toUpperCase() != value[0]) {
                returnObj.hasErr = true;
                returnObj.errMsg = 'Incorrect Name';
            }
            break;
        }
        case 'userAge': {
            if (value != +value) {
                returnObj.hasErr = true;
                returnObj.errMsg = 'Incorrect Age';
            }
            break;
        }
    }

    return returnObj;
}

export default class FormComponent extends Component { //Пример с ref в input
    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(e) {
        e.preventDefault();
        console.log(`Name: ${this.refs.userName.state.value} Age: ${this.refs.userAge.state.value}`);
    }

    render() {
        return (//весь прикол в привязке value к state
            <form onSubmit={this.submitHandler}>
                <Input label="Имя" id="userName" ref="userName"/>
                <Input label="Возвраст" id="userAge" ref="userAge"/>
                <input type="submit" value="Send"/>
            </form>
        );
    }
}

class Input extends Component {
    constructor(props) {
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
        this.state = {value:'', hasErr: false, errMsg: ''};
    }

    changeHandler(e) {
        const nameAttr = e.target.name,
            valueAttr = e.target.value,
            err = validate(nameAttr, valueAttr),
            obj = {};

        if (err.hasErr) {
            this.setState(err);
            return;
        } else {
            Object.assign(obj, err);
        }

        obj.value = valueAttr;
        this.setState(obj);
    }

    render() {
        const style = this.state.hasErr ? {borderColor:'red'}:{borderColor:'green'};
        return (
            <p>
                <label htmlFor={this.props.id}>{this.props.label}</label><br/>
                <input id={this.props.id} name={this.props.id} style={style} type="text" onChange={this.changeHandler} value={this.state.value}/>
            </p>
        );
    }
}