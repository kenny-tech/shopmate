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
                                                <td>{product.product}</td>
                                                <td>Size: S<br/>Color: White</td>
                                                <td>1</td>
                                                <td>${product.price}</td>
                                                <td><span className="pull-right removeItem removeItemHover">x</span></td>
                                            </tr>
                                        );
                                })}   
                            </tbody>
                        </table>
                        { this.props.cart!==null? <p className="float-right">Total Price: <span className="textPink total">${this.props.total.toFixed(2)}</span></p> : null }
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