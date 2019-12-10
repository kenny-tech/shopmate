import axios from 'axios';

import { UPDATE_PROFILE } from './types';

const ROOT_URL = 'https://backendapi.turing.com/';

export const updateProfile = () => {
    return (dispatch) => {
        axios.get(ROOT_URL + 'customers/address')
        .then(response => {
            dispatch({
                type: UPDATE_PROFILE,
                payload: response.data
            });
        })
        .catch(error => {
           // console.log(error); 
        }) 
    };
};