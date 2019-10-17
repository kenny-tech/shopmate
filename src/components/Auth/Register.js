import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import '../../css/SignupModal.css';

export default class Register extends Component{
    
    render() {
        return( ReactDOM.createPortal(  
            <div className="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
                <div className="modal-dialog modal-md">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <div className="modal-content">
                        
                        <div className="modal-body">
                            <div className="row">
                               
                                <div className="col-md-12 header-col">
                                    <h3 className="confirmation-modal-header">Enter Password</h3>
                                </div>
                                    <form className="register-kit-form">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" name="email" id="" placeholder="Email Address" value={this.props.email} disabled/>
                                                    <label for="email">Email Address</label>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="password" className="form-control" name="password" id="password" placeholder="Password" onChange={this.handleChange} required />
                                                    <label for="password">Password</label>
                                                </div>
                                            </div>
                                        </div>    
                                    </form>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>,
            document.querySelector('#modal')
           )
        ) 
    }
}