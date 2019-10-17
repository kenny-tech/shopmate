import { combineReducers } from 'redux';
import { reducer as fetchProduct } from './product';
import { reducer as fetchDepartment } from './department';

const rootReducer = combineReducers({
    products: fetchProduct,
    departments: fetchDepartment
})

export default rootReducer;