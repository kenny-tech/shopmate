import { ADD_TO_CART } from '../actions/types';
import { REMOVE_FROM_CART, UPDATE_CART_ITEM_QUANTITY } from '../actions/types';

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
        case UPDATE_CART_ITEM_QUANTITY: 
            // find product in cart
            // console.log(state.cart);
            let product = state.cart.find(product => product.product_id === action.payload.product_id);
            console.log(product);
            // remove existing product from cart
            let newCart = state.cart.filter(product => product.product_id !== action.payload.product_id);
            // add updated quantity to the product
            newCart.push(product);
            return {
                ...state,
                cart: newCart,
                // total: state.total + parseFloat(action.payload.quantity * product.price)
            }        
        default:
            return state;
    }
}
