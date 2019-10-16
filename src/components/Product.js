import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions/product';

import '../css/Product.css';
import '../App.css';

const imageBaseUrl = 'https://backendapi.turing.com/images/products/';

class Product extends Component {
    componentWillMount() {
        this.props.fetchProducts();   
    }

    render() {
        if(!this.props.products) {
            return <div>Loading...</div>
        }
        const productArray = Object.values(this.props.products.rows);
        //console.log('The product array: ', productArray);

        return (
            <React.Fragment>    
                <div className="container-fluid p-3">
                    <div className="row">
                        <div className="col-md-9 row">
                            {
                                productArray.map(product => {
                                    return (
                                            <div className="col-md-3 productDiv">
                                                <div className="card">
                                                    <img src={imageBaseUrl + product.thumbnail} className="card-img-top img-responsive" alt={product.name} />
                                                    <div className="card-body">
                                                        <p className="card-title text-center productTitle">{product.name}</p>
                                                        <p className="card-text text-center textPink">${product.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return { products: state.products.allProducts}
}

export default connect(mapStateToProps, actions)(Product);