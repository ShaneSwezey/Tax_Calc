import {
    FETCH_BRACKET_BEGIN,
    FETCH_BRACKET_SUCCESS,
    FETCH_BRACKET_FAILURE
} from '../actions/infoActions';
import { BracketState } from '../state/BracketState';

export default function infoReducer(state = BracketState, action) {
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
                year: action.payload.bracketInfo.year,
                taxBracket: action.payload.bracketInfo.taxBracket,
                taxAmount: action.payload.bracketInfo.taxAmount,
                percOfInc: action.payload.bracketInfo.percentOfIncome,
                socialSecurityTax: action.payload.bracketInfo.socialSecurityTax,
                medicareTax: action.payload.bracketInfo.medicareTax,
                rates: action.payload.bracketInfo.rates,
                loading: false,
                error: null
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