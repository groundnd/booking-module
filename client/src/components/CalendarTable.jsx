/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import theme from './themes/default';
import { DateData, formatDate } from '../helpers/Dates';

// Todo: fix spacing/margins

const StyledCalendarTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0px;
  width: 100%;
  margin-bottom: 16px;
`;

const TableBody = styled.tbody`
  display; table-row-group;
`;

const EmptyCell = styled.td`
  width: 38px;
  height: 41px;
  font-family: ${theme.fonts.primary};
  font-weight: 600;
  font-size: ${theme.fonts.size[2]};
  text-align: center;
`;

const AvailableDay = styled(EmptyCell)`
  border: ${theme.borders.width} ${theme.borders.style} ${theme.borders.color};
  color: ${theme.palette.primary[1]};
`;

const UnavailableDay = styled(EmptyCell)`
  border: ${theme.borders.width} ${theme.borders.style} ${theme.borders.color};
  text-decoration: line-through;
  color: ${theme.palette.primary[7]};
  cursor: default;
`;

const CalendarTable = ({
  currentDay,
  currentMonth = 3,
  currentYear = 119,
  availability = {},
  checkInDate,
  checkOutDate,
  lastAvailable,
  minStay,
}) => {
  const firstDay = new Date(`${DateData[currentMonth].month} 1, ${currentYear + 1900}`).getDay();
  const days = [];
  for (let i = 0; i < firstDay; i += 1) {
    days.push(<EmptyCell />);
  }
  for (let j = 0; j < DateData[currentMonth].numDays; j += 1) {
    const date = formatDate(new Date(currentYear + 1900, currentMonth, j + firstDay));
    // eslint-disable-next-line no-unused-expressions
    availability[date]
      ? (days.push(<UnavailableDay id={date}>{j + firstDay}</UnavailableDay>))
      : (days.push(<AvailableDay id={date}>{j + firstDay}</AvailableDay>));
  }
  const days1 = days.slice(0, 7);
  const days2 = days.slice(7, 14);
  const days3 = days.slice(14, 21);
  const days4 = days.slice(21, 28);
  const days5 = days.slice(28);
  return (
    <StyledCalendarTable>
      {Object.keys(availability).length
        ? (
          <TableBody>
            <tr>
              {days1}
            </tr>
            <tr>
              {days2}
            </tr>
            <tr>
              {days3}
            </tr>
            <tr>
              {days4}
            </tr>
            <tr>
              {days5}
            </tr>
          </TableBody>
        )
        : (<div />)
      }
    </StyledCalendarTable>
  );
};


export default CalendarTable;
