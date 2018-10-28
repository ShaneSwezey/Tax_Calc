import {
    FETCH_YEARS_BEGIN,
    FETCH_YEARS_SUCCESS,
    FETCH_YEARS_FAILURE
} from '../actions/yearActions';
import { YearState } from '../state/YearState';

export default function yearReducer(state = YearState, action) {
    switch(action.type) {
        case FETCH_YEARS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_YEARS_SUCCESS:
            return {
                ...state,
                loading: false,
                incomeYears: action.payload.years,
            };
        case FETCH_YEARS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,   
            };
        default:
            return state;
    }
}