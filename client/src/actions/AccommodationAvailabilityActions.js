export const FETCH_ACCOMMODATIONS_BEGIN = 'FETCH_ACCOMMODATIONS_BEGIN';
export const FETCH_ACCOMMODATIONS_SUCCESS = 'FETCH_ACCOMMODATIONS_SUCCESS';
export const FETCH_ACCOMMODATIONS_FAILURE = 'FETCH_ACCOMMODATIONS_FAILURE';

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchAccommodationsBegin = () => ({
  type: FETCH_ACCOMMODATIONS_BEGIN,
});

export const fetchAccommodationsSuccess = ({ accommodation, availability }) => ({
  type: FETCH_ACCOMMODATIONS_SUCCESS,
  payload: { accommodation, availability }
});

export const fetchAccommodationsFailure = error => ({
  type: FETCH_ACCOMMODATIONS_FAILURE,
  payload: { error },
});

export const fetchAccommodation = () => (
  (dispatch) => {
    const accommodationid = Math.floor(Math.random() * 100);
    dispatch(fetchAccommodationsBegin());
    return fetch(`/bookings/${accommodationid}/reserve`)
      .then(handleErrors)
      .then(res => res.json())
      .then((json) => {
        json.availability = json.availability.map(val => new Date(`${val.date} Z`));
        dispatch(fetchAccommodationsSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchAccommodationsFailure(error)));
  });
