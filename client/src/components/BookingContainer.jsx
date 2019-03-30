import React, { Component } from 'react';
import PriceReview from './PriceReviews';

const BookingContainer = props => {
  return (
    <div id="bm-booking-container">
      <div id="bm-booking-container-margin">
        <div id="bm-booking-content">
          <PriceReview />
        </div>
      </div>
    </div>
  )
}

export default BookingContainer;