import { FETCH_PRODUCT, FETCH_PRODUCT_DETAIL } from '../actions/types';

export const reducer = ( state = {}, action) => {
    
    switch (action.type) {
        case FETCH_PRODUCT:
            return { ...state, allProducts: action.payload }
        case FETCH_PRODUCT_DETAIL:
            return { ...state, detail: [action.payload] }
        default:
            return state;
    }

}