import React from 'react';
import styled from 'styled-components';
import theme from './themes/default';
import Dates from './Dates';
import Guests from './Guests';
import GuestDropdown from './GuestDropdown';
import Calendar from './Calendar';

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

const DropDownContainer = styled.div`
  display: block;
  z-index: 2;
  width: 100%;
`;


const BookingForm = () => (
  <div id="bm-booking-form-container">
    <form id="bm-booking-form">
      <CheckOutContainer>
        <Dates />
        <Calendar />
        <Guests />
        <DropDownContainer>
          {/* <GuestDropdown /> */}
        </DropDownContainer>
        <Button>Book</Button>
      </CheckOutContainer>
      <ChargeContainer>
        <ChargeNotice>You won&apos;t be charged yet</ChargeNotice>
      </ChargeContainer>
    </form>
  </div>
);


export default BookingForm;
