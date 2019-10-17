import React, { Component } from 'react';

import Modal from '../components/Modal';
import Signup from '../components/Auth/Signup';

class Header extends Component {
    state = {
        showModal: true
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
                    {/* <div className="row header">
                        <div className="col-md-6">
                            <p>Logo</p>
                        </div>
                        <div className="col-md-6">
                            <button className="btn btn-primary" onClick={this.toggleModal}>Register Now</button>
                        </div>
                    </div> */}
                    <button className="btn btn-primary" onClick={this.toggleModal}>Register Now</button>

                    <Modal open={this.state.showModal} onClose={this.toggleModal}><Signup /></Modal>
                </div>
            </React.Fragment>
        )
    }
}

export default Header;