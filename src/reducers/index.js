import { combineReducers } from 'redux';
import { reducer as fetchProduct } from './product';
import { reducer as fetchDepartment } from './department';
import { reducer as fetchCategory } from './category';
import { reducer as fetchCartItems } from './cart';

const rootReducer = combineReducers({
    products: fetchProduct,
    departments: fetchDepartment,
    dept: fetchCategory,
    cart: fetchCartItems,
})

export default rootReducer;