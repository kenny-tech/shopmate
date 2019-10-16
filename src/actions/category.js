import axios from 'axios';

import { FETCH_DEPARTMENT_CATEGORIES } from './types';

const ROOT_URL = 'https://backendapi.turing.com/';

export function fetchDepartmentCategories(department_id)
{
    return (dispatch) => {
        axios.get(ROOT_URL + 'categories/inDepartment/'+ department_id)
        .then(response => {
            // console.log('Department ID: ', response);
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
