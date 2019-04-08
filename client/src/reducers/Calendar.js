import { nextMonth, prevMonth } from '../helpers/Dates';
import {
  CHANGE_CHECKIN,
  CHANGE_CHECKOUT,
  CHANGE_MONTH,
  TOGGLE_CALENDAR,
} from '../actions/Calendar';

const initialState = {
  checkInDate: null,
  checkOutDate: null,
  currentDay: new Date().getDay(),
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getYear(),
  checkInSelected: false,
  checkOutSelected: false,
  priceListDisplay: false,
};

export default function calendarReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CHECKIN:
      return {
        ...state,
        checkInDate: action.date,
        dateSelect: 'CheckOut',
      };

    case CHANGE_CHECKOUT:
      return {
        ...state,
        checkInDate: action.date,
        dateSelect: null,
      };

    case CHANGE_MONTH:
      if (action.command === 'increase') {
        return {
          ...state,
          currentMonth: nextMonth(state.currentMonth, state.currentYear)[0],
          currentYear: nextMonth(state.currentMonth, state.currentYear)[1],
        };
      }
      return {
        ...state,
        currentMonth: prevMonth(state.currentMonth, state.currentYear)[0],
        currentYear: prevMonth(state.currentMonth, state.currentYear)[1],
      };

    case TOGGLE_CALENDAR:
      return {
        ...state,
        calendarDisplay: true,
      };

    default:
      return state;
  }
}
