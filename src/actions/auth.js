import axios from 'axios';

import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';

const ROOT_URL = 'https://backendapi.turing.com';

export const signupUser = ({ name, email, password }) => {
    return (dispatch) => {
        axios.post(`${ROOT_URL}/customers`, { name, email, password })
            .then(response => {
                dispatch({ 
                    type: AUTH_USER, 
                    payload: true
                });
                localStorage.setItem('token', response.data.accessToken);
                console.log('Registration successful. Your access token is: ',response.data.accessToken);
            })
            .catch(err => {
                dispatch({
                    type: AUTH_ERROR,
                    payload: err.message
                })
            })
    }
}

export const signinUser = ({ email, password }) => {
    return (dispatch) => {
        axios.post(`${ROOT_URL}/customers/login`, { email, password })
            .then(response => {
                dispatch({ 
                    type: AUTH_USER, 
                    payload: true
                });
                localStorage.setItem('token', response.data.accessToken);
                console.log('Login successful. Your access token is: ',response.data.accessToken);
            })
            .catch(err => {
                dispatch({
                    type: AUTH_ERROR,
                    payload: err.message
                })
            })
    }
}