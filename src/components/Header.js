import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row topMargin">
                        <div className="col-md-4">
                            <p>Hi! <span className="textColor">Sign in</span> or <span className="textColor">Register</span></p>
                        </div>
                        <div className="col-md-4 text-center">
                            <p><span className="p-2">Daily Deals</span><span className="p-2">Sell</span><span className="p-2">Help & Contact</span></p>
                        </div>
                        <div className="col-md-4">
                            <p className="pull-right">Your Bag: $0.00</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Header;