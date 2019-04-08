import { formatDate } from '../helpers/Dates';

export const FETCH_ACCOMMODATIONS_BEGIN = 'FETCH_ACCOMMODATIONS_BEGIN';
export const FETCH_ACCOMMODATIONS_SUCCESS = 'FETCH_ACCOMMODATIONS_SUCCESS';
export const FETCH_ACCOMMODATIONS_FAILURE = 'FETCH_ACCOMMODATIONS_FAILURE';
export const FETCH_AVAILABILITY_SUCCESS = 'FETCH_AVAILABILITY_SUCCESS';

const accommodationID = Math.floor(Math.random() * 100);

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

export const fetchAccommodation = (
  accommodationid = accommodationID,
) => (
  (dispatch) => {
    dispatch(fetchAccommodationsBegin());
    return fetch(`/bookings/${accommodationid}/reserve`)
      .then(handleErrors)
      .then(res => res.json())
      .then((json) => {
        json.availability = json.availability.reduce((acc, cv) => {
          acc[formatDate(new Date(`${cv.date} Z`))] = true;
          return acc;
        }, {});
        dispatch(fetchAccommodationsSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchAccommodationsFailure(error)));
  });

export const fetchAvailabilitySuccess = ({ availability }) => ({
  type: FETCH_AVAILABILITY_SUCCESS,
  payload: { availability }
});

export const fetchAvailability = (
  accommodationid = accommodationID,
  startDate,
  endDate,
) => (dispatch) => {
  return fetch(`/bookings/${accommodationid}/reserve/${startDate}&${endDate}`)
    .then(handleErrors)
    .then(res => res.json())
    .then((json) => {
      json.availability = json.availability.map(val => new Date(`${val.date} Z`));
      dispatch(fetchAvailabilitySuccess(json));
      return json;
    })
    .catch(error => dispatch(fetchAccommodationsFailure(error)));
};
