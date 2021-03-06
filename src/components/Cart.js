import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeFromCart } from '../actions/cart';
import '../css/Cart.css';
import Button from './Button';
import Modal from '../components/Modal';
import CartItems from '../components/CartItems';

class Cart extends Component {
    state = {
        showModal: false
    }

    handleClick = (product_id, price) => {
        this.props.removeFromCart(product_id, price); 
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    
    render() {
        //console.log('cart aaa: ',this.props.cart);
        if(!this.props.cart) {
            return null
        } else {
            return (
                <React.Fragment>
                    <div className="categoryDiv">
                        {
                            this.props.existedProduct? 
                            (<div className="alert alert-danger">
                                Product already in cart
                            </div>) : null
                        }
                        {this.props.cart.map(product => {
                            return ( 
                                <div className="cartDiv">
                                    <p>{product.quantity}<span className="times">x </span>{product.product}<span className="pull-right removeItem removeItemHover" onClick={()=>this.handleClick(product.product_id, product.price)}>x</span></p>
                                    <p>Size: {product.size}</p>
                                    <p>Color: {product.color}</p>
                                </div>
                            );
                        })}   
                        {
                            this.props.isCart? 
                            (
                                <div>
                                    {
                                        this.props.cart.length > 0 ?
                                        <p className="float-right">Total Price: <span className="textPink total">${this.props.total.toFixed(2)}</span></p>
                                        : null
                                    }
                                    <div className="d-block text-center cursor-pointer" onClick={this.toggleModal}><Button buttonText="View Details" /></div>
                                </div>
                            ) 
                            : null
                        }
                    </div> 
                    <Modal open={this.state.showModal} onClose={this.toggleModal} title="Cart Items"><CartItems /></Modal>
                </React.Fragment>
            )
        }
    }

}

const mapStateToProps = (state) => {
    return { 
        isCart:state.cart.isCart,
        cart: state.cart.cart,
        total: state.cart.total,
        existedProduct: state.cart.existedProduct,
        product: state.cart.product
    };
}

const mapDispatchToProps = (dispatch) => {
    return { removeFromCart: (product_id, price) => {dispatch(removeFromCart(product_id, price))}}
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);