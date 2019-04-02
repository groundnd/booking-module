import React from 'react';
import styled from 'styled-components';
import PriceReview from './PriceReviews';
import theme from './themes/default';
import BookingForm from './BookingForm';

const BookingBox = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  background-color: ${theme.palette.background};
  margin: 0px;
  border-width: ${theme.borders.width};
  border-style: ${theme.borders.style};
  border-color: ${theme.borders.color};
`;

const Spacer = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;
`;

const BookingContainer = () => (
  <BookingBox>
    <Spacer>
      <div id="bm-booking-content">
        <PriceReview />
        <BookingForm />
      </div>
    </Spacer>
  </BookingBox>
);

export default BookingContainer;
