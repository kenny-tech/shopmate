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
                    <div class="panel panel-default divPanel">
                        <div class="panel-body">
                            {this.props.detail.map(product => {
                                return (
                                    <div className="row p-3">
                                        <div className="col-md-3">
                                            <img src={imageBaseUrl + product.thumbnail} alt={product.name} />
                                        </div>
                                        <div className="col-md-9">
                                            <p>{product.name}</p>
                                            <h3>${product.price}</h3>
                                            <p>{product.description}</p>
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
