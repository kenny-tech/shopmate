import axios from 'axios';

import { FETCH_DEPARTMENT } from './types';

const ROOT_URL = 'https://backendapi.turing.com/';

export const fetchDepartments = () => {
    return (dispatch) => {
        axios.get(ROOT_URL + 'departments')
        .then(response => {
            // console.log('The departments are:', response);
            dispatch({
                type: FETCH_DEPARTMENT,
                payload: response.data
            });
        })
        .catch(error => {
           // console.log(error); 
        }) 
    };
};