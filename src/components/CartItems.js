import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../css/Cart.css';
import { removeFromCart, updateCartItemQuantity } from '../actions/cart';
import Button from './Button';

const imageBaseUrl = 'https://backendapi.turing.com/images/products/';

class CartItems extends Component {    

    handleClick = (product_id, price) => {
        this.props.removeFromCart(product_id, price); 
    }

    handleQuantityChange = (event, product_id) => {
        let quantity = event.target.value;
        this.props.updateCartItemQuantity(product_id,quantity);
    }

    render() {
        //console.log('cart aaa: ',this.props.cart);
        if(!this.props.cart) {
            return null
        } else {
            return (
                <React.Fragment>
                    <div>
                        <table className="table">
                            <thead>
                                <th scope="col">Item</th>
                                <th scope="col">Options</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </thead>
                            <tbody>
                                {
                                    this.props.cart.map(product => {
                                        return (
                                            <tr>
                                                <td><img src={imageBaseUrl + product.thumbnail} className="card-img-top img-responsive" alt={product.name} /><br/>{product.product}</td>
                                                <td>Size: {product.size}<br/>Color: {product.color}</td>
                                                <td><input type="number" className="form-control" style={{width:'80px'}} defaultValue={product.quantity} min="1" onChange={(event) => this.handleQuantityChange(event,product.product_id)}/></td>
                                                <td>${product.price}</td>
                                                <td><span className="pull-right removeItem removeItemHover" onClick={()=>this.handleClick(product.product_id, product.price)}>x</span></td>
                                            </tr>
                                        );
                                })}   
                            </tbody>
                        </table>
                        <div className="float-right d-block">{ this.props.cart!==null? <p>Total Price: <span className="textPink total">${this.props.total.toFixed(2)}</span></p> : null }</div>
                        <div className="d-block text-right cursor-pointer"><Button buttonText = "Checkout"/></div>
                    </div> 
                </React.Fragment>
            )
        }
    }

}

const mapStateToProps = (state) => {
    return { 
        cart: state.cart.cart,
        total: state.cart.total,
    };
}

const mapDispatchToProps = (dispatch) => {
    return { 
        removeFromCart: (product_id, price) => {dispatch(removeFromCart(product_id, price))},
        updateCartItemQuantity: (product_id,quantity) => {dispatch(updateCartItemQuantity((product_id, quantity)))}

        }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartItems);