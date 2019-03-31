import React, { Component } from 'react';
import PriceReview from './PriceReviews';
import styled from 'styled-components';
import theme from './themes/default';

const BookingBox = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  background-color: rgb(255, 255, 255);
  margin: 0px;
  border-width: ${theme.borders.width};
  border-style: ${theme.borders.style};
  border-color: ${theme.borders.color};
`

const BookingContainer = props => {
  return (
    <BookingBox>
      <div id="bm-booking-container-margin">
        <div id="bm-booking-content">
          <PriceReview />
        </div>
      </div>
    </BookingBox>
  )
}

export default BookingContainer;
