const URL = 'http://localhost:3001/';

export const retrieveBracketInfo = async(filingStatus, incomeYear, annualWage) => {
    return dispatch => {
        dispatch(fetchBracketBegin());
        try {
            const fetchUrl = `${URL}${filingStatus}/${incomeYear}/${annualWage}`;
            const result = await fetch(fetchUrl);
            const jsonResult = await result.json();
            dispatch(fetchBracketSuccess(jsonResult));
            //return jsonResult;
        } catch (error) {
            dispatch(fetchBracketFailure(error));
            //return error;
        }
    };
}

export const FETCH_BRACKET_BEGIN = 'FETCH_BRACKET_BEGIN';
export const FETCH_BRACKET_SUCCESS = 'FETCH_BRACKET_SUCCESS';
export const FETCH_BRACKET_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchBracketBegin = () => ({
    type: FETCH_BRACKET_BEGIN
});


export const fetchBracketSuccess = bracketInfo => ({
    type: FETCH_BRACKET_SUCCESS,
    payload: { bracketInfo }
});

export const fetchBracketFailure = error => ({
    type: FETCH_BRACKET_FAILURE,
    payload: { error }
});