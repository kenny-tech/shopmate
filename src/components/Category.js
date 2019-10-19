import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchCategoryProducts } from '../actions/product';

class Category extends Component {
    render() {
        if(!this.props.departmentCategories) {
            return null
        }

        const categoryArray = Object.values(this.props.departmentCategories);
        
        return (
            <div className="categoryDiv">
                <h6>Category</h6>
                {categoryArray.map(category => {
                    return (
                        <div>
                            <button key={category.category_id} className="btn btn-default btn-xs sidebarButton" onClick={()=>this.props.fetchCategoryProducts(category.category_id)}>{category.name}</button>
                        </div>
                    );
                })}
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { departmentCategories: state.dept.categories, };
}

const mapDispatchToProps = (dispatch) => {
    return { fetchCategoryProducts: (category_id) => {dispatch(fetchCategoryProducts(category_id))}}
}

export default connect(mapStateToProps,mapDispatchToProps)(Category);