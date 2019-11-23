import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../css/Details.css';

const imageBaseUrl = 'https://backendapi.turing.com/images/products/';

class Details extends Component {
    
    render() {
        if(!this.props.detail) {
            return null
        }

        console.log('Details: ',this.props.detail);

        return (
            <div className="container m-3 d-flex">
                <div>
                    <div class="panel panel-default divPanel w-100 p-3">
                        <div class="panel-body">
                            {this.props.detail.map(product => {
                                return (
                                    <div className="row p-3">
                                        <div className="col-md-3">
                                            <img src={imageBaseUrl + product.thumbnail} alt={product.name} />
                                        </div>
                                        <div className="col-md-9">
                                            <p>{product.name}</p>
                                            <h3 className="priceText">${product.price}</h3>
                                            <p>{product.description}</p>
                                            <h6>Quantity</h6>
                                            <input type="number" className="form-control" style={{width:'80px'}} defaultValue={product.quantity} min="1"/>
                                            <h6>Size</h6>
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <div className="divSize d-flex justify-content-center align-items-center d-inline-block">S</div>
                                                </div>
                                                <div className="col-md-2">
                                                    <div className="divSize d-flex justify-content-center align-items-center d-inline-block">M</div>
                                                </div>
                                                <div className="col-md-2">
                                                    <div className="divSize d-flex justify-content-center align-items-center d-inline-block">L</div>
                                                </div>
                                                <div className="col-md-2">
                                                    <div className="divSize d-flex justify-content-center align-items-center d-inline-block">XL</div>
                                                </div>
                                                <div className="col-md-2">
                                                    <div className="divSize d-flex justify-content-center align-items-center d-inline-block">XXL</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
    return { detail: state.products.detail}
}

export default connect(mapStateToProps, null)(Details);
