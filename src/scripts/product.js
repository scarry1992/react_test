import React, {Component} from 'react';
import {Link} from 'react-router';

const phones = [
    {id:1, name: 'Samsung'},
    {id:2, name: "Nokia"},
    {id:3, name: "Xiaomi"}
];

class Product extends Component {
    render() {
        return (
            <div className="product">
                {this.props.children}
            </div>
        );
    }
}

// class ProductItem extends Component {
//     render() {
//         return (
//             <div className="product-item">
//                 Item {this.props.params.id}//через params можно получить доступ к значению роута
//             </div>
//         );
//     }
// }

class ProductItem extends Component {
    render() {
        return (
            <div className="product-item">
                Product {this.props.params.id} - {this.props.params.name}
                {
                    phones.map((item, index) => (
                        <li key={index}>
                            <Link to={`/product/${item.id}/${item.name}`}>{item.name}</Link>
                        </li>
                    ))
                }
            </div>
        );
    }
}

export {Product, ProductItem}