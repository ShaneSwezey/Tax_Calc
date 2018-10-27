import {
    FETCH_BRACKET_BEGIN,
    FETCH_BRACKET_SUCCESS,
    FETCH_BRACKET_FAILURE
} from '../actions/infoActions';

export default function infoReducer(state, action) {
    switch(action.type) {
        case FETCH_BRACKET_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_BRACKET_SUCCESS:
            return {
                ...state,
                
            };
        case FETCH_BRACKET_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        default:
            return state;
    }
}