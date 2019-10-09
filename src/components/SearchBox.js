import React, { Component } from 'react';

class SearchBox extends Component {
    render() {
        return (
            <div className="form-group searchBox">
                <input type="text" name="search" class="form-control"/>
            </div>
        )
    }
}

export default SearchBox;