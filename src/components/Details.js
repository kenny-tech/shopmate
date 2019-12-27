import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addToCart } from '../actions/cart';
import '../css/Details.css';

const imageBaseUrl = 'https://backendapi.turing.com/images/products/';

class Details extends Component {
    state = {
        quantity: 1,
        size: 'S',
        color: 'White',
        sizeBgColor: '',
        sizeTextColor: '',
        colorBgColor: '',
        colorTextColor: ''
    }

    handleQuantityChange = (event) => {
        this.setState({quantity: event.target.value});
    }

    handleSizeChange = (size) => {
        this.setState({size: size, sizeBgColor: '#FF1493', sizeTextColor: '#FFFFFF'});
    }
    
    handleColorChange = (color) => {
        this.setState({color: color, colorBgColor: '#FF1493', colorTextColor: '#FFFFFF'});
    }

    handleAddToCartClick = (event,product_id,product,price,thumbnail,quantity,size,color) => {
        this.props.addToCart(product_id,product,price,thumbnail,quantity,size,color);
        event.preventDefault();
        alert('Product successfully added to cart');
        window.location.href = '/';
    }
    
    render() {
        if(!this.props.detail) {
            return null
        }

        return (
            <div className="container m-3 d-flex">
                <div>
                    <div class="panel panel-default divPanel w-100 p-3">
                        <div class="panel-body">
                            {this.props.detail.map(product => {
                                return (
                                    <form>
                                        <div className="row p-3" key={product.product_id}>
                                            <div className="col-md-3">
                                                <img src={imageBaseUrl + product.thumbnail} alt={product.name} />
                                            </div>
                                            <div className="col-md-9">
                                                <h4>{product.name}</h4>
                                                <h3 className="priceText">${product.price}</h3>
                                                <p>{product.description}</p>
                                                <h6>Quantity</h6>
                                                <input type="number" className="form-control" style={{width:'80px'}} defaultValue={product.quantity} onChange={this.handleQuantityChange} min="1"/>
                                                <h6 className="mt-3">Size</h6>
                                                <div className="row mt-3">
                                                    <div className="col-md-2">
                                                        <div className="divSizeBox d-flex justify-content-center align-items-center d-inline-block" onClick = {() => this.handleSizeChange('S')} style={{ cursor: 'pointer', backgroundColor: this.state.sizeBgColor, color: this.state.sizeTextColor }}>S</div>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <div className="divSizeBox d-flex justify-content-center align-items-center d-inline-block" onClick = {() => this.handleSizeChange('M')} style={{ cursor: 'pointer' }}>M</div>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <div className="divSizeBox d-flex justify-content-center align-items-center d-inline-block" onClick = {() => this.handleSizeChange('L')} style={{ cursor: 'pointer' }}>L</div>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <div className="divSizeBox d-flex justify-content-center align-items-center d-inline-block" onClick = {() => this.handleSizeChange('XL')} style={{ cursor: 'pointer' }}>XL</div>
                                                    </div>
                                                    <div className="col-md-2">
                                                        <div className="divSizeBox d-flex justify-content-center align-items-center d-inline-block" onClick = {() => this.handleSizeChange('XXL')} style={{ cursor: 'pointer' }}>XXL</div>
                                                    </div>
                                                </div>
                                                <h6 className="mt-3">Color</h6>
                                                <div className="row mt-3">
                                                    <div className="col-md-1">
                                                        <div className="divColorBox d-flex justify-content-center align-items-center d-inline-block" onClick = {() => this.handleColorChange('White')} style={{ cursor: 'pointer', backgroundColor: this.state.colorBgColor, color: this.state.colorTextColor }}>WHITE</div>
                                                    </div>
                                                    <div className="col-md-1">
                                                        <div className="divColorBox d-flex justify-content-center align-items-center d-inline-block" onClick = {() => this.handleColorChange('Black')} style={{ cursor: 'pointer' }}>BLACK</div>
                                                    </div>
                                                    <div className="col-md-1">
                                                        <div className="divColorBox d-flex justify-content-center align-items-center d-inline-block" onClick = {() => this.handleColorChange('Red')} style={{ cursor: 'pointer' }}>RED</div>
                                                    </div>
                                                    <div className="col-md-1">
                                                        <div className="divColorBox d-flex justify-content-center align-items-center d-inline-block" onClick = {() => this.handleColorChange('Orange')} style={{ cursor: 'pointer' }}>ORANGE</div>
                                                    </div>
                                                    <div className="col-md-1">
                                                        <div className="divColorBox d-flex justify-content-center align-items-center d-inline-block" onClick = {() => this.handleColorChange('Yellow')} style={{ cursor: 'pointer' }}>YELLOW</div>
                                                    </div>
                                                    <div className="col-md-1">
                                                        <div className="divColorBox d-flex justify-content-center align-items-center d-inline-block" onClick = {() => this.handleColorChange('Blue')} style={{ cursor: 'pointer' }}>BLUE</div>
                                                    </div>
                                                    <div className="col-md-1">
                                                        <div className="divColorBox d-flex justify-content-center align-items-center d-inline-block" onClick = {() => this.handleColorChange('Green')} style={{ cursor: 'pointer' }}>GREEN</div>
                                                    </div>
                                                    <div className="col-md-1">
                                                        <div className="divColorBox d-flex justify-content-center align-items-center d-inline-block" onClick = {() => this.handleColorChange('Indigo')} style={{ cursor: 'pointer' }}>INDIGO</div>
                                                    </div>
                                                    <div className="col-md-1">
                                                        <div className="divColorBox d-flex justify-content-center align-items-center d-inline-block" onClick = {() => this.handleColorChange('Purple')} style={{ cursor: 'pointer' }}>PURPLE</div>
                                                    </div>
                                                </div>
                                                <button className="btn btn-default btn-m mt-3 buttonAddToCart" onClick={(event)=>this.handleAddToCartClick(event,product.product_id,product.name,product.price,product.thumbnail,this.state.quantity,this.state.size,this.state.color)}>Add to cart</button>
                                            </div>
                                        </div>
                                    </form>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        detail: state.products.detail,
        cart: state.cart.cart,
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
            addToCart: (product_id,product,price,thumbnail,quantity,size,color) => {dispatch(addToCart(product_id,product,price,thumbnail,quantity,size,color))}
        }
}


export default connect(mapStateToProps, mapDispatchToProps)(Details);
