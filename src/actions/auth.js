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
                localStorage.setItem('token', response.accessToken);
            })
            .catch(err => {
                dispatch({
                    type: AUTH_ERROR,
                    payload: err.message
                })
            })
    }
}