import React, { Component } from 'react';

import Signup from './Modal/Signup'; 
import '../css/SignupModal.css';

class Header extends Component {
    state = {
        openModal: false
    }

    openSignupModal = () => {
        this.setState({
            openModal: true,
        })
    }

    openSignup = () => {
        return (
            <div className="modalDiv">
                <div className="modal-dialog modal-md">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <h3 className="confirmation-modal-header">Are you {this.state.firstname} {this.state.lastname}?</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row header">
                        <div className="col-md-6">
                            <p>Logo</p>
                        </div>
                        <div className="col-md-6">
                            <p className="pull-right"><span onClick={() => this.openSignupModal()}>Register</span> | Login</p>
                        </div>
                    </div>
                    {this.state.openModal ? this.openSignup() : null}
                </div>
                <Signup />
            </React.Fragment>
        )
    }
}

export default Header;