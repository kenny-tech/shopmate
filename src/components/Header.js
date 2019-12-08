import React, { Component } from 'react';

import Modal from '../components/Modal';
import Signup from '../components/Auth/Signup';
import Signin from '../components/Auth/Signin';
import '../css/Header.css';

class Header extends Component {
    state = {
        showSignupModal: false,
        showSigninModal: false
    }

    toggleSignupModal = () => {
        this.setState({
            showSignupModal: !this.state.showSignupModal
        })
    }

    toggleSigninModal = () => {
        this.setState({
            showSigninModal: !this.state.showSigninModal
        })
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <div className="row header">
                        <div className="col-md-6">
                            <p>Logo</p>
                        </div>
                        <div className="col-md-6">
                            <span onClick={this.toggleSignupModal} className="pull-right cursor-pointer signupSpan">Sign up </span>
                            <span onClick={this.toggleSigninModal} className="pull-right cursor-pointer">Sign in</span>
                        </div>
                    </div>
                    <Modal open={this.state.showSignupModal} onClose={this.toggleSignupModal} title="Sign up"><Signup /></Modal>
                    <Modal open={this.state.showSigninModal} onClose={this.toggleSigninModal} title="Sign in"><Signin /></Modal>
                </div>
            </React.Fragment>
        )
    }
}

export default Header;