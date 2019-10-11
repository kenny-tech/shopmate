import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions/';

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
                {
                    productArray.map(product => {
                        return (
                            <div className="col-md-3">
                                <div className="card productCard">
                                    <img src={imageBaseUrl + product.thumbnail} class="card-img-top" alt={product.name} />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{product.name}</h5>
                                        <p className="card-text text-center textPink">${product.price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return { products: state.products.allProducts}
}

export default connect(mapStateToProps, actions)(Product);