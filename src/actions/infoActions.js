const URL = 'http://localhost:3001/';

export const retrieveBracketInfo = (values) => {
    return async(dispatch) => {
        dispatch(fetchBracketBegin());
        try {
            const fetchUrl = `${URL}${values.filing_status}/${values.income_year}/${values.annual_wages}`;
            const result = await fetch(fetchUrl);
            const jsonResult = await result.json();
            console.log(jsonResult);
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