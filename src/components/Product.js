import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions/product';

import '../css/Product.css';
import '../App.css';

const imageBaseUrl = 'https://backendapi.turing.com/images/products/';

class Product extends Component {
    state = {
        currenPage: 1,
        perPage: 6
    }

    componentWillMount() {
        this.props.fetchProducts();   
    }

    handleClick = (number) => {
        this.setState({
            currentPage: Number(number)
        });  
    }

    render() {
        
        const { currentPage, perPage } = this.state;

        if(!this.props.products) {
            return <div>Loading...</div>
        }
        
        const productArray = Object.values(this.props.products.rows);
        //console.log('The product array: ', productArray);

        // Logic for displaying current products
        const indexOfLastProduct = currentPage * perPage;
        const indexOfFirstProduct = indexOfLastProduct - perPage;
        const currentProducts = productArray.slice(indexOfFirstProduct, indexOfLastProduct);

        const renderProducts = currentProducts.map((product, index) => {
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
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(productArray.length / perPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
              <li
                key={number}
                id={number}
                onClick={() => this.handleClick(number)}
              >
                {number}
              </li>
            );
        });


        return (
            <React.Fragment>    
                <div className="container-fluid p-3">
                    <div className="row">
                        <div className="col-md-12">
                            <ul id="page-numbers">
                                {renderPageNumbers}
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-9 row">
                            { renderProducts }
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