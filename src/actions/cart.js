import { ADD_TO_CART } from './types';

export function addToCart(product_id,product_name,price,size,color)
{
    let cartItems = {
        product_id: product_id,
        product_name: product_name,
        price: price,
        size: size,
        color: color 
    }
    alert(product_id);
    console.log('Cart Items: ', cartItems)
    return {
        type: ADD_TO_CART,
        payload: cartItems
    }
}


