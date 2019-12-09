import { combineReducers } from 'redux';
import { reducer as fetchProduct } from './product';
import { reducer as fetchDepartment } from './department';
import { reducer as fetchCategory } from './category';
import { reducer as fetchCartItems } from './cart';
import { reducer as fetchRegions } from './region';
import { reducer as authReducer } from './auth';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    products: fetchProduct,
    departments: fetchDepartment,
    dept: fetchCategory,
    cart: fetchCartItems,
    form: formReducer,
    auth: authReducer,
    regions: fetchRegions
})

export default rootReducer;