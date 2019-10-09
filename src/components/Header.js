import React, { Component } from 'react';

import Signup from './Modal/Signup'; 

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
                            <p className="pull-right"><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#signUpModal">Register</button> | Login</p>
                        </div>
                    </div>
                </div>
                <Signup />
            </React.Fragment>
        )
    }
}

export default Header;