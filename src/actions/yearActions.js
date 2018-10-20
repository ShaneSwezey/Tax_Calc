export function getAvailableYears() {
    return dispatch => {
        dispatch(fetchYearsBegin());
        return fetch(`http://localhost:3001/years/`)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
            dispatch(fetchYearsSuccess(json.years));
            return json.years;
        })
        .catch(error => dispatch(fetchYearsFailure(error)));
    };
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export const FETCH_YEARS_BEGIN = 'FETCH_YEARS_BEGIN';
export const FETCH_YEARS_SUCCESS = 'FETCH_YEARS_SUCCESS';
export const FETCH_YEARS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchYearsBegin = () => ({
    type: FETCH_YEARS_BEGIN
});

export const fetchYearsSuccess = years => ({
    type: FETCH_YEARS_SUCCESS,
    payload: { years }
});

export const fetchYearsFailure = error => ({
    type: FETCH_YEARS_FAILURE,
    payload: { error }
});