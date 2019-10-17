import React, { Component } from 'react';

import Modal from '../components/Modal';
import Signup from '../components/Auth/Signup';
import '../css/Header.css';

class Header extends Component {
    state = {
        showModal: false
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
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
                            <span onClick={this.toggleModal} className="pull-right cursor-pointer">Register Now</span>
                        </div>
                    </div>
                    <Modal open={this.state.showModal} onClose={this.toggleModal} title="Sign up"><Signup /></Modal>
                </div>
            </React.Fragment>
        )
    }
}

export default Header;