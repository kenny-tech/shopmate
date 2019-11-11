import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeFromCart } from '../actions/cart';
import '../css/Cart.css';

class Cart extends Component {
    
    handleClick = (product_id, price) => {
        this.props.removeFromCart(product_id, price); 
    }
    
    render() {
        //console.log('cart aaa: ',this.props.cart);
        if(!this.props.cart) {
            return null
        } else {
            return (
                <div className="categoryDiv">
                    {this.props.cart.map(product => {
                        return (
                            <div className="cartDiv">
                                <p>1 <span className="times">x </span>{product.product}<span className="pull-right removeItem removeItemHover" onClick={()=>this.handleClick(product.product_id, product.price)}>x</span></p>
                                <p>Size: S</p>
                                <p>Color: White</p>
                            </div>
                        );
                    })}   
                    {
                        this.props.cart!==null? <p className="float-right">Total Price: <span className="textPink total">${this.props.total.toFixed(2)}</span></p> : null
                    }
                </div> 
            )
        }
    }

}

const mapStateToProps = (state) => {
    return { 
        cart: state.cart.cart,
        total: state.cart.total
    };
}

const mapDispatchToProps = (dispatch) => {
    return { removeFromCart: (product_id, price) => {dispatch(removeFromCart(product_id, price))}}
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);