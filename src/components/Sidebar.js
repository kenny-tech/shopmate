import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="sidebarPanel p-2">
                                <div className="form-group searchBox">
                                    <input type="text" name="search" class="form-control"/>
                                </div>
                                <div>
                                    <h5>Department</h5>
                                    <div>
                                        <button className="btn btn-default btn-sm sidebarButton">REGIONAL</button>
                                        <button className="btn btn-default btn-sm sidebarButton">NATURE</button>
                                        <button className="btn btn-default btn-sm sidebarButton">SEASONAL</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Sidebar;