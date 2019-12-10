import { UPDATE_PROFILE } from '../actions/types';

export const reducer = ( state = {}, action) => {
    
    switch (action.type) {
        case UPDATE_PROFILE:
            return { ...state, isProfile: true, profile: action.payload }
        default:
            return state;
    }

}