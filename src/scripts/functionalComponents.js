import React from 'react';
import ReactDOM from 'react-dom';

let props = {
    message: 'No Message',
    user: {
        name: "No Name",
        alt: "No Image",
        img: "/assets/img/noimg.png"
    }
};

function LogoComponent(props) {
    return <img className="user__logo" src={props.user.img} alt={props.user.alt}/>
}

function NameComponent(props) {
    return (
        <div className="user__name">
            {props.user.name}
        </div>
    );
}

function MessageComponent(props) {
    return (
        <div className="comment__message">
            {props.message}
        </div>
    );
}

function UserComponent(props) {
    return (
        <div className="comment__user">
            <LogoComponent user={props.user}/>
            <NameComponent user={props.user}/>
        </div>
    );
}

function DateComponent(props) {
    return (
        <div className={props.className}>
            {new Date().toLocaleDateString()}
        </div>
    );
}

export default function Comment(props) {
    return (
        <div className="comment">
            <UserComponent user={props.user}/>
            <MessageComponent message={props.message}/>
            <DateComponent className="comment__date"/>
        </div>
    );
}
Comment.defaultProps = props;