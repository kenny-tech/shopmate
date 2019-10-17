import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" id="" placeholder="Email Address"/>
                            </div>
                        </div>
                    </div>
    
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" id="password" placeholder="Password" required />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;