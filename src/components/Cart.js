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
                            this.props.isCart? 
                            (
                                <div>
                                    <p className="float-right">Total Price: <span className="textPink total">${this.props.total.toFixed(2)}</span></p>
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
        total: state.cart.total
    };
}

const mapDispatchToProps = (dispatch) => {
    return { removeFromCart: (product_id, price) => {dispatch(removeFromCart(product_id, price))}}
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);