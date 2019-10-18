import { FETCH_DEPARTMENT } from '../actions/types'

export const reducer = ( state = {}, action ) => {
    switch ( action.type ) {
        case FETCH_DEPARTMENT:
            return { ...state, allDepartments: action.payload }
        default:
            return state;
    }
}
