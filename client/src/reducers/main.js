import { combineReducers } from 'redux';
import accommodation from './AccommodationsAvailability';
import guests from './Guests';

const rootReducer = combineReducers({
  accommodation,
  guests,
});

export default rootReducer;
