import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions/';

import '../css/Product.css';

class Product extends Component {

    componentWillMount() {
        this.props.fetchProducts();   
    }

    render() {
       //console.log('The products: ',this.props.products);
        if(!this.props.products) {
            return <div>Loading...</div>
        }

        return (
            <React.Fragment>    
                {
                    this.props.products!=null ?          
                    (<div className="col-md-3">
                        <div className="card productCard">
                            <img src="..." class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Product Name</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>)
                    : <div>No product found</div> 
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return { products: state.products.allProducts}
}

export default connect(mapStateToProps, actions)(Product);