import React from 'react';
import styled from 'styled-components';
import theme from './themes/default';
import Dates from './Dates';

const Button = styled.button`
  font-size: ${theme.fonts.size[1]};
  font-family: ${theme.fonts.primary};
  font-weight: 800;
  background: ${theme.palette.primary[0]};
  width: 100%;
  color: ${theme.fonts.color[1]};
`;

const BookingForm = props => {
  return (
    <div id="bm-booking-form-container">
      <form id="bm-booking-form">
        <div id="bm-checkout-container">
          <Dates />
        </div>
        <div id="bm-book-button-container"></div>
          <Button >Book</Button>
        <div id="bm-booking-footer-text"></div>
      </form>
    </div>
  )
}

export default BookingForm;
