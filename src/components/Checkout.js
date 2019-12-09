import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchRegions } from '../actions/region';
import '../css/Checkout.css';

class Checkout extends Component {

    componentWillMount() {
        this.props.fetchRegions();   
    };

    state = {
        firstname: '',
        lastname: '',
        address: '',
        city: '',
        userState: '',
        country: '',
        zipCode: ''
    }

    render() {    
        return (
            <React.Fragment>    
                <div className="container pt-3">
                    <div className="row divRow">
                        <h3>Checkout</h3>
                        <form>
                            <div className="row">
                                <div className="col-md-4 form-group">
                                    <label for="firstname">First name</label>
                                    <input type="text" value={this.state.firstname} className="form-control" />
                                </div>
                                <div className="col-md-4 form-group">
                                    <label for="lastname">Last name</label>
                                    <input type="text" value={this.state.lastname} className="form-control" />
                                </div>
                                <div className="col-md-4 form-group">
                                    <label for="address">Address</label>
                                    <input type="text" value={this.state.address} className="form-control" />
                                </div>
                                <div className="col-md-4 form-group">
                                    <label for="city">City</label>
                                    <input type="text" value={this.state.city} className="form-control" />
                                </div>
                                <div className="col-md-4 form-group">
                                    <label for="state">State</label>
                                    <input type="text" value={this.state.userState} className="form-control" />
                                </div>
                                <div className="col-md-4 form-group">
                                    <label for="country">Country</label>
                                    <input type="text" value={this.state.country} className="form-control" />
                                </div>
                                <div className="col-md-4 form-group">
                                    <label for="country">Zip Code</label>
                                    <input type="text" value={this.state.zipCode} className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h5>Shipping</h5>
                                </div>
                                <div className="form-group col-md-4">
                                    <label for="country">Region</label>
                                    <select className="form-control">
                                        {
                                            this.props.isRegion?
                                            this.props.regions.map(region => {
                                                return <option id={region.shipping_region_id} value={region.shipping_region_id}>{region.shipping_region}</option>
                                            }) :
                                            <option value="">Unable to fetch regions</option>
                                        }
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>        
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        regions: state.regions.shippingRegions,
        isRegion: state.regions.isRegion
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRegions: () => {dispatch(fetchRegions())},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);