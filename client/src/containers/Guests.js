import { connect } from 'react-redux';
import Guests from '../components/Guests';
import {
  toggleGuestDropdown, guestSelected, infantsSelected, changeGuests,
} from '../actions/Guests';

// Actions:

const mapStateToProps = store => ({
  numAdults: store.guests.numAdults,
  numChildren: store.guests.numChildren,
  numInfants: store.guests.numInfants,
  numGuests: store.guests.numAdults + store.guests.numChildren,
  guestThreshold: store.accommodation.guest_threshold,
  maxGuests: store.accommodation.max_guests,
  guestsSelected: store.guests.guestsSelected,
  infantsSelected: store.guests.infantsSelected,
  overGuestThreshold: store.guests.overGuestThreshold,
  guestDropdown: store.guests.guestDropdown,
});

const mapDispatchToProps = dispatch => ({
  handleDropdownClick: (e) => {
    e.preventDefault();
    dispatch(toggleGuestDropdown());
  },
  changeGuests: (e) => {
    const type = e.target.id.slice(3, 5);
    const action = e.target.id.slice(6);
    let guestType;
    let num;
    if (type === 'ad') {
      guestType = 'numAdults';
    } else if (type === 'ch') {
      guestType = 'numChildren';
    } else {
      guestType = 'numInfants';
    }
    if (action === 'inc') {
      num = Number(e.target.value) + 1;
    } else {
      num = Number(e.target.value) - 1;
    }
    dispatch(changeGuests(guestType, num));
  },
  selectGuests: () => {
    dispatch(guestSelected());
  },
  selectInfants: () => {
    dispatch(infantsSelected());
  },
});

const GuestContainerState = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Guests);

export default GuestContainerState;
