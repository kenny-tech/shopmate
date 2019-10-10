import { combineReducers } from 'redux';
import { reducer as fetchProduct } from './product';

const rootReducer = combineReducers({
    products: fetchProduct
})

export default rootReducer;