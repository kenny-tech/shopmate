import React, { Component } from 'react';

import { connect } from 'react-redux';

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
                            <button key={category.id} className="btn btn-default btn-xs sidebarButton">{category.name}</button>
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

export default connect(mapStateToProps,null)(Category);