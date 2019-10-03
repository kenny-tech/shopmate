import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 

class Sidebar extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h1>Categories</h1>
                            <Link to="/">French</Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Sidebar;