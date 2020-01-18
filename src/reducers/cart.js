import { ADD_TO_CART } from '../actions/types';
import { REMOVE_FROM_CART, ADD_QUANTITY, SUB_QUANTITY } from '../actions/types';

const initState = {
    cart:[],
    total: 0
}

export const reducer = ( state = initState, action ) => {
    switch ( action.type ) {
        case ADD_TO_CART:
            let cart = Object.values(state.cart);
            let existed_product = cart.find(product => product.product_id === action.payload.product_id);
            
            if(existed_product) {
                return {
                    ...state,
                    existedProduct: true,
                    cart: [...state.cart],
                }
            } else {
                return  { 
                    ...state, 
                    isCart: true,
                    existedProduct: false,
                    product: action.payload.product,
                    cart: [action.payload, ...state.cart],
                    total: state.total + parseFloat(action.payload.price)
                }
            }
        case REMOVE_FROM_CART: 
            return {
                        ...state,
                        cart: state.cart.filter(product => product.product_id !== action.payload.product_id),
                        total: state.total - parseFloat(action.payload.price)
                    }
        case ADD_QUANTITY: 
            let addedItem = state.cart.find(item => item.product_id === action.payload.product_id)
            // console.log('addedItem: ',addedItem);
            addedItem.quantity += 1
            addedItem.price = parseFloat(addedItem.price) + parseFloat(addedItem.price)
            let newTotal = parseFloat(state.total) + parseFloat(addedItem.price)
            return {
                ...state,
                total: newTotal
            }
        case SUB_QUANTITY: 
            let addedItems = state.cart.find(item=> item.product_id === action.payload.product_id) 
            //if the qt == 0 then it should be removed
            if(addedItems.quantity === 1){
                let new_items = state.cart.filter(item=>item.product_id !== action.payload.product_id)
                let newTotal = state.total - addedItems.price
                return{
                    ...state,
                    cart: new_items,
                    total: newTotal
                }
            }
            else {
                addedItems.quantity -= 1
                let newTotal = state.total - addedItems.price
                return{
                    ...state,
                    total: newTotal
                }
            }

            //if the quantity == 0 then product should be removed
            // if(cartItem.quantity === 1) {
            // }
            // else {
            //     cartItem.quantity -= 1
            //     let newTotal = state.total - cartItem.price
            //     return {
            //         ...state,
            //         cart: [cartItem],
            //         total: newTotal
            //     }
            // }
        default:
            return state;
    }
}
