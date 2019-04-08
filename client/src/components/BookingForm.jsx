import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import theme from './themes/default';
import Dates from './Dates';
import CalendarContainerState from '../containers/Calendar';
import GuestContainerState from '../containers/Guests';
import { fetchAccommodation } from '../actions/AccommodationAvailabilityActions';
import { toggleCalendar } from '../actions/Calendar';

const CheckOutContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Button = styled.button`
  font-size: ${theme.fonts.size[1]};
  font-family: ${theme.fonts.primary};
  font-weight: 600;
  background: ${theme.palette.primary[0]};
  width: 100%;
  color: ${theme.fonts.color[1]};
  height: 46px;
  border: 2px solid transparent;
  border-radius: 4px;
  margin-top: 24px;
`;

const ChargeContainer = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: center;
`;

const ChargeNotice = styled.span`
  font-weight: 600;
  font-size: ${theme.fonts.size[3]};
  color: ${theme.fonts.color[0]};
  line-height: ${theme.fonts.lineHeight[1]};
  text-align: center;
  font-family: ${theme.fonts.primary};
`;

class BookingForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAccommodation());
  }

  render() {
    const {
      checkInDate,
      checkOutDate,
      toggleCalendar,
      checkInSelected,
      checkOutSelected,
    } = this.props;
    return (
      <div id="bm-booking-form-container">
        <form id="bm-booking-form">
          <CheckOutContainer>
            <Dates checkInDate={checkInDate} checkOutDate={checkOutDate} toggleCalendar={toggleCalendar} />
            {checkInSelected || checkOutSelected
              ? <CalendarContainerState />
              : ''
            }
            <GuestContainerState />
            <Button>Book</Button>
          </CheckOutContainer>
          <ChargeContainer>
            <ChargeNotice>You won&apos;t be charged yet</ChargeNotice>
          </ChargeContainer>
        </form>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  accommodation: state.accommodation,
  availability: state.accommodation.availability,
  checkInDate: state.calendar.checkInDate,
  checkOutDate: state.calendar.checkOutDate,
  checkInSelected: state.calendar.checkInSelected,
  checkOutSelected: state.calendar.checkOutSelected,
  loading: state.accommodation.loading,
  error: state.accommodation.error,
});

const mapDispatchToProps = dispatch => ({
  toggleCalendar: () => {
    dispatch(toggleCalendar());
  },
  dispatch,
});


export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);
