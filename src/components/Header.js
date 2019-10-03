import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row header">
                        <div className="col-md-6">
                            <p>Logo</p>
                        </div>
                        <div className="col-md-6">
                            <p className="pull-right">Register | Login</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Header;