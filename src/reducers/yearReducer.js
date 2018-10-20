import {
    FETCH_YEARS_BEGIN,
    FETCH_YEARS_SUCCESS,
    FETCH_YEARS_FAILURE
} from '../actions/yearActions';
import { initialState } from '../state/initstate';


export default function yearReducer(state = initialState, action) {
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
                incomeYears: action.payload.years,
                filingYear: action.payload.years[0]
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