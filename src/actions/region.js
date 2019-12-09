import axios from 'axios';

import { FETCH_REGION } from './types';

const ROOT_URL = 'https://backendapi.turing.com/';

export const fetchRegions = () => {
    return (dispatch) => {
        axios.get(ROOT_URL + 'shipping/regions')
        .then(response => {
            // console.log('The regions are: ',response.data);
            dispatch({
                type: FETCH_REGION,
                payload: response.data
            });
        });
    };
};

