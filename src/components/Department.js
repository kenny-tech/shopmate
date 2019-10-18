import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDepartments } from '../actions/department';
import { fetchDepartmentCategories} from '../actions/category';


class Department extends Component {
    componentWillMount () {
        this.props.fetchDepartments();
    }

    render() {
        if(!this.props.departments) {
            return <div>Loading...</div>
        }
        const departmentArray = Object.values(this.props.departments);
        //console.log('The department array: ', departmentArray);

        return (
            <div>
                <h6>Department</h6>
                {departmentArray.map(department => {
                    return (
                        <div>
                            <button className="btn btn-default btn-xs sidebarButton" onClick={()=>this.props.fetchDepartmentCategories(department.department_id)}>{department.name}</button>
                        </div>
                    );
                })}
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { departments: state.departments.allDepartments }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDepartments: () => dispatch(fetchDepartments()),
        fetchDepartmentCategories: (department_id) => {dispatch(fetchDepartmentCategories(department_id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Department);