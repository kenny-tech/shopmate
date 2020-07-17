import { ADD_TO_CART } from './types';
import { REMOVE_FROM_CART, UPDATE_CART_ITEM_QUANTITY, SUB_QUANTITY, ADD_QUANTITY } from './types';

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

export const addQuantity = (product_id) => {
    return {
        type: ADD_QUANTITY,
        payload: {
            product_id,
        }
    }
}

export const subtractQuantity = (product_id) => {
    return {
        type: SUB_QUANTITY,
        payload: {
            product_id,
        }
    }
}

