import React from 'react';
import ReportListing from './ReportListing';
import BookingContainer from './BookingContainer';

const BookingModule = props => (
  <div id="bm-top-margin">
    <div id="bm-parent-container">
      <BookingContainer />
      <ReportListing />
    </div>
  </div>
  );

export default BookingModule;