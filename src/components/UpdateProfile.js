import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { fetchRegions } from '../actions/region';
import { updateProfile } from '../actions/updateProfile';

import '../css/Checkout.css';

class UpdateProfile extends Component {

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

    handleFormSubmit(formProps) {
        //console.log(formProps);
        this.props.updateProfile(formProps);
    }

    renderField = ({ input, label, type, className,  meta: { touched, error, warning } }) => (
        <div>
          <label>{label}</label>
          <div>
            <input {...input} type={type} className={className}/>
            {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
          </div>
        </div>
    );

    renderError() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    Oops! {this.props.errorMessage}
                </div>
            );
        }
    }
    
    render() {

        const { handleSubmit, submitting } = this.props;

        return (
            <div className="container pt-3">
                <div className="row divRow">
                    <h3>Update Profile</h3>
                    <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                        <div className="row">
                            <div className="col-md-4 form-group">
                                <fieldset className="form-group">
                                    <Field 
                                        className="form-control"
                                        name="firstname" 
                                        type="text" 
                                        value={this.state.firstname}
                                        component={this.renderField} 
                                        label="First name"/>
                                </fieldset>
                            </div>
                            <div className="col-md-4 form-group">
                                <fieldset className="form-group">
                                    <Field 
                                        className="form-control"
                                        name="lastname" 
                                        type="text" 
                                        value={this.state.lastname}
                                        component={this.renderField} 
                                        label="Last name"/>
                                </fieldset>
                            </div>
                            <div className="col-md-4 form-group">
                                <fieldset className="form-group">
                                    <Field 
                                        className="form-control"
                                        name="address" 
                                        type="text" 
                                        value={this.state.address}
                                        component={this.renderField} 
                                        label="Address"/>
                                </fieldset>
                            </div>
                            <div className="col-md-4 form-group">
                                <fieldset className="form-group">
                                    <Field 
                                        className="form-control"
                                        name="city" 
                                        type="text" 
                                        value={this.state.city}
                                        component={this.renderField} 
                                        label="City"/>
                                </fieldset>
                            </div>
                            <div className="col-md-4 form-group">
                                <fieldset className="form-group">
                                    <Field 
                                        className="form-control"
                                        name="state" 
                                        type="text" 
                                        value={this.state.state}
                                        component={this.renderField} 
                                        label="State"/>
                                </fieldset>
                            </div>
                            <div className="col-md-4 form-group">
                                <fieldset className="form-group">
                                    <label for="country">Country</label>
                                    <Field 
                                        className="form-control"
                                        name="country" 
                                        type="select"
                                        label="Country"
                                        component="select">
                                        <option value={this.state.country}>Select Country</option>
                                        <option value="NG">Nigeria</option>
                                    </Field>
                                </fieldset>
                            </div>
                            <div className="col-md-4 form-group">
                                <fieldset className="form-group">
                                    <Field 
                                        className="form-control"
                                        name="zipCode" 
                                        type="text" 
                                        value={this.state.zipCode}
                                        component={this.renderField} 
                                        label="Zip code"/>
                                </fieldset>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 form-group">
                                <fieldset className="form-group">
                                    <label for="country">Region</label>
                                    <Field 
                                        className="form-control"
                                        name="region" 
                                        type="select"
                                        label="Country"
                                        component="select"> 
                                        {
                                            this.props.isRegion?
                                            this.props.regions.map(region => {
                                                return <option id={region.shipping_region_id} value={region.shipping_region_id}>{region.shipping_region}</option>
                                            }) :
                                            <option value="">Unable to fetch regions</option>
                                        }             
                                    </Field>
                                </fieldset>
                            </div>
                        </div>
                        {this.renderError()}
                        {
                            this.props.isProfile?
                            <div className="alert alert-success">Profile successfully updated</div>:null
                        }
                        <div className="pull-right">
                            <button type="submit" className="btn btn-primary" disabled={submitting}>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const validate = values => {
    const errors = {};

    if (!values.firstname) {
        errors.firstname = 'Please enter your firstname';
    }

    if (!values.lastname) {
        errors.lastname = 'Please enter your lastname';
    }

    if (!values.address) {
        errors.address = 'Please enter your address';
    }

    if (!values.city) {
        errors.city = 'Please enter your city';
    }

    if (!values.state) {
        errors.state = 'Please enter your state';
    }

    if (!values.country) {
        errors.country = 'Please select your country';
    }

    if (!values.region) {
        errors.region = 'Please select your region';
    }

    return errors;
};

const mapStateToProps = (state) => {
    return { 
        regions: state.regions.shippingRegions,
        isRegion: state.regions.isRegion,
        isProfile: state.profile.isProfile
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRegions: () => {dispatch(fetchRegions())},
        updateProfile: () => {dispatch(updateProfile())},
    }
}

export default reduxForm({
    form: 'checkout',
    validate
})(connect(mapStateToProps, mapDispatchToProps)(UpdateProfile));