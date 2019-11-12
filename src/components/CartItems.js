import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../css/Cart.css';

class CartItems extends Component {    
    render() {
        //console.log('cart aaa: ',this.props.cart);
        if(!this.props.cart) {
            return null
        } else {
            return (
                <React.Fragment>
                    <div>
                        {this.props.cart.map(product => {
                            return (
                                <div className="cartDiv">
                                    <p>1 <span className="times">x </span>{product.product}<span className="pull-right removeItem removeItemHover">x</span></p>
                                </div>
                            );
                        })}   
                        {
                            this.props.cart!==null? <p className="float-right">Total Price: <span className="textPink total">${this.props.total.toFixed(2)}</span></p> : null
                        }
                    </div> 
                </React.Fragment>
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

export default connect(mapStateToProps,null)(CartItems);