import { ADD_TO_CART } from '../actions/types';
import { REMOVE_FROM_CART } from '../actions/types';

const initState = {
    cart:[],
    total: 0
}

export const reducer = ( state = initState, action ) => {
    switch ( action.type ) {
        case ADD_TO_CART:
            return  { 
                        ...state, 
                        cart: [action.payload, ...state.cart],
                        total: state.total + parseFloat(action.payload.price)
                    }
        case REMOVE_FROM_CART: 
            return {
                        ...state,
                        cart: state.cart.filter(product => product.product_id !== action.payload.product_id),
                        total: state.total - parseFloat(action.payload.price)
                    }
        default:
            return state;
    }
}
