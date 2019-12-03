import { ADD_TO_CART } from './types';
import { REMOVE_FROM_CART } from './types';
import { UPDATE_CART_ITEM_QUANTITY } from './types';

export const addToCart = (product_id,product,price,thumbnail,quantity,size,color) =>
{
    return {
        type: ADD_TO_CART,
        payload: {
            product_id,
            product,
            price,
            thumbnail,
            quantity,
            size,
            color
        }
      }
}

export const removeFromCart = (product_id,price) => {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            product_id,
            price
        }
    }   
}

export const updateCartItemQuantity = (product_id,quantity) => {
    return {
        type: UPDATE_CART_ITEM_QUANTITY,
        payload: {
            product_id,
            quantity
        }
    }   
}



