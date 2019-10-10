import { FETCH_PRODUCT } from '../actions/types';

export const reducer = ( state = {}, action) => {
    
    switch (action.type) {
        case FETCH_PRODUCT:
            return { ...state, allProducts: action.payload }
        default:
            return state;
    }

}