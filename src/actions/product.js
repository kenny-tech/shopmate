import axios from 'axios';

import { FETCH_PRODUCT } from './types';

const ROOT_URL = 'https://backendapi.turing.com/';

export const fetchProducts = () => {
    return (dispatch) => {
        //axios.get(ROOT_URL + 'products?page='+page+'&limit='+limit)
        axios.get(ROOT_URL + 'products')
        .then(response => {
            //console.log(response);
            dispatch({
                type: FETCH_PRODUCT,
                payload: response.data
            });
        });
    };
};

export const fetchCategoryProducts = (category_id) => {
    return (dispatch) => {
        axios.get(ROOT_URL + 'products/inCategory/' + category_id)
        .then(response => {
            //console.log(response);
            dispatch({
                type: FETCH_PRODUCT,
                payload: response.data
            });
        });
    };
};

export const fetchSearchProduct = (searchText) => {
    return (dispatch) => {
        axios.get(ROOT_URL + 'products/search/?query_string=' + searchText)
        .then(response => {
            //console.log('Search Product: ', response);
            dispatch({
                type: FETCH_PRODUCT,
                payload: response.data
            });
        });
    };
};
