import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions/';

class Product extends Component {

    componentWillMount() {
        this.props.fetchProducts();   
    }

    render() {
        //console.log(this.props.products);
        return (
            <div className="col-md-10">
                <h3 className="text-center">Products</h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { products: state.products.allProducts}
}

export default connect(mapStateToProps, actions)(Product);