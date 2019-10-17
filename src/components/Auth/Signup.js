import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
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
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <input type="submit" className="btn btn-primary register-kit-btn btn-block" value="Register Kit" />
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        )
    }
}

export default Signup;