import axios from 'axios';

import { FETCH_DEPARTMENT, FETCH_DEPARTMENT_CATEGORIES } from './types';

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

export function fetchDepartmentCategories(department_id)
{
    return (dispatch) => {
        axios.get(ROOT_URL + 'categories/inDepartment/'+ department_id)
        .then(response => {
            // console.log('Response:', response);
            dispatch({
                type: FETCH_DEPARTMENT_CATEGORIES,
                payload: response.data
            });
        })
        .catch(error => {
            // console.log(error);
        })
    }
}