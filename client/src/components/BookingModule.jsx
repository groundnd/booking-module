import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import ReportListing from './ReportListing';
import BookingContainer from './BookingContainer';
import { fetchAccommodation } from '../actions/AccommodationAvailabilityActions';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('./themes)
    font-family: 'Circular'
  }
  `;

class BookingModule extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAccommodation());
  }

  render() {
    return (
      <div id="bm-top-margin">
        <div id="bm-parent-container">
          <GlobalStyles />
          <BookingContainer />
          <ReportListing />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  accommodation: state.accommodation,
  availability: state.accommodation.availability,
  loading: state.accommodation.loading,
  error: state.accommodation.error,
});

export default connect(mapStateToProps)(BookingModule);
