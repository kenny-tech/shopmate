import React, { Component } from 'react';

class Department extends Component {
    render() {
        return (
            <div>
                <h5>Department</h5>
                <div>
                    <button className="btn btn-default btn-sm sidebarButton">REGIONAL</button>
                    <button className="btn btn-default btn-sm sidebarButton">NATURE</button>
                    <button className="btn btn-default btn-sm sidebarButton">SEASONAL</button>
                </div>
            </div>
        )
    }
}

export default Department;