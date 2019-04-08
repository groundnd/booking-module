import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Calendar from '../components/Calendar';
import { 
  toggleCalendar,
  changeCheckIn,
  changeCheckOut,
  changeMonth,
} from '../actions/Calendar';

const mapStateToProps = store => ({
  minStay: store.accommodation.minimum_stay_length,
  lastAvailable: store.accommodation.availability_end_date,
  availability: store.accommodation.availability,
  checkInDate: store.accommodation.appState.checkInDate,
  checkOutDate: store.accommodation.appState.checkOutDate,
  currentDay: store.accommodation.appState.currentDay,
  currentMonth: store.accommodation.appState.currentMonth,
  currentYear: store.accommodation.appState.currentYear,
  checkInSelected: store.accommodation.appState.checkInSelected,
  checkOutSelected: store.accommodation.appState.checkOutSelected,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    toggleCalendar,
    changeCheckIn,
    changeCheckOut,
    changeMonth,
  }, dispatch)
);

const CalendarContainerState = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calendar);

export default CalendarContainerState;
