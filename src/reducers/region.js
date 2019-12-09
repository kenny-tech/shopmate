import { FETCH_REGION } from '../actions/types';

export const reducer = ( state = {}, action) => {
    
    switch (action.type) {
        case FETCH_REGION:
            return { ...state, shippingRegions: action.payload }
        default:
            return state;
    }

}