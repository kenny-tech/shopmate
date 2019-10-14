import React, { Component } from 'react';

import { connect } from 'react-redux';

class Category extends Component {
    // componentWillMount() {
    //     var departmentCategories = this.props.departmentCategories;
    //     console.log('Department Categories', departmentCategories);
    // }

    render() {
        if(!this.props.departmentCategories) {
            return <div>Loading...</div>
        }

        const categoryArray = Object.values(this.props.departmentCategories);
        console.log('Category array is: ', categoryArray);
        return (
            <div className="categoryDiv">
                <h6>Category</h6>
                {categoryArray.map(category => {
                    return (
                        <div>
                            <button className="btn btn-default btn-xs sidebarButton">{category.name}</button>
                        </div>
                    );
                })}
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { departmentCategories: state.departments.categories, };
}

export default connect(mapStateToProps,null)(Category);