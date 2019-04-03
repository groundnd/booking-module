import React from 'react';
import styled from 'styled-components';
import theme from './themes/default';
import CalendarDOTW from './CalendarDOTW';
import CalendarTable from './CalendarTable';

const CalendarContainer = styled.div`
  border-width: ${theme.borders.width};
  border-style: ${theme.borders.style};
  border-color: ${theme.borders.color};
  border-radius: 3px;
  display: flex;
  flex-flow: row wrap;
  width: 326px;
  padding-top: 24px;
`;

const CalendarHeader = styled.div`
  display: flex;
  flex-flow row no-wrap;
  width: 100%;
  padding: 0px 22px;
`;

const ButtonContainer = styled.div`
  border-width: ${theme.borders.width};
  border-style: ${theme.borders.style};
  border-color: ${theme.borders.color};
  border-radius: 3px;
  padding: 6px 9px;
  font-size: ${theme.fonts.size[2]};
  line-height: 10.92px;
  color: ${theme.palette[2]};
  // Todo: determine if right color, revise color names to describe how they're used
`;

const CalendarArrow = styled.svg`
  height: 19px; 
  width: 19px;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const CalendarLabel = styled.span`
  width: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${theme.fonts.primary};
  font-size: 18px;
  font-weight: 700;
  line-height: 25.74px;
  color: ${theme.fonts.color[0]};
`;

const Calendar = () => (
  <CalendarContainer>
    <CalendarHeader>
      <ButtonContainer>
        <CalendarArrow viewBox="0 0 1000 1000">
          <path d="M336.2 274.5l-210.1 210h805.4c13 0 23 10 23 23s-10 23-23 23H126.1l210.1 210.1c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7l-249.1-249c-11-11-11-21 0-32l249.1-249.1c21-21.1 53 10.9 32 32z" />
        </CalendarArrow>
      </ButtonContainer>
      <CalendarLabel> Month Year</CalendarLabel>
      <ButtonContainer>
        <CalendarArrow viewBox="0 0 1000 1000">
          <path d="M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z" />
        </CalendarArrow>
      </ButtonContainer>
    </CalendarHeader>
    <CalendarDOTW />
    <CalendarTable />
    <div id="Empty space and ?"></div>
  </CalendarContainer>
);

//individual cell rows are 13/13 padding with 12 font-size text, 38 across, middle-centered

export default Calendar;
