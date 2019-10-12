import React, { Component } from 'react';

class Department extends Component {
    render() {
        return (
            <div>
                <h6>Department</h6>
                <div>
                    <button className="btn btn-default btn-xs sidebarButton">REGIONAL</button>
                    <button className="btn btn-default btn-xs sidebarButton">NATURE</button>
                    <button className="btn btn-default btn-xs sidebarButton">SEASONAL</button>
                </div>
            </div>
        )
    }
}

export default Department;