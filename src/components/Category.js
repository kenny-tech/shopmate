import React, { Component } from 'react';

class Category extends Component {
    render() {
        return (
            <div>
                <h5>Category</h5>
                <div>
                    <button className="btn btn-default btn-sm sidebarButton">FRENCH</button>
                    <button className="btn btn-default btn-sm sidebarButton">ITALIAN</button>
                    <button className="btn btn-default btn-sm sidebarButton">IRISH</button>
                </div>
            </div>
        )
    }
}

export default Category;