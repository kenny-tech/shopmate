import { FETCH_DEPARTMENT_CATEGORIES } from '../actions/types'

export const reducer = ( state = {}, action ) => {
    switch ( action.type ) {
        case FETCH_DEPARTMENT_CATEGORIES:
            return { ...state, categories: action.payload}
        default:
            return state;
    }
}
