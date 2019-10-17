import axios from 'axios';

import { FETCH_PRODUCT } from './types';

const ROOT_URL = 'https://backendapi.turing.com/products';

export const fetchProducts = () => {
    return (dispatch) => {
        axios.get(ROOT_URL)
        .then(response => {
            //console.log(response);
            dispatch({
                type: FETCH_PRODUCT,
                payload: response.data
            });
        });
    };
};