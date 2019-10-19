import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSearchProduct } from '../actions/product';

const ENTER_KEY = 13;

class SearchBox extends Component {
    state = {
        searchText: '',
    }

    handleChange = e => {    
        this.setState({ searchText: e.target.value })
    }
    
    handleKeyDown = e => {
        if (e.keyCode === ENTER_KEY) {
            this.props.fetchSearchProduct(this.state.searchText);   
        }
    }
    
    render() {
        return (
            <div className="form-group searchBox">
            <input type="text" name="search" placeholder="Search..." onChange={this.handleChange} onKeyDown={this.handleKeyDown} class="form-control"/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { fetchSearchProduct: (searchText) => dispatch(fetchSearchProduct(searchText))}
}

export default connect(null,mapDispatchToProps)(SearchBox);