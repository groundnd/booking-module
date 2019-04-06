import React from 'react';
import styled from 'styled-components';
import theme from './themes/default';

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
`;

const UnavailableDay = styled(EmptyCell)`
  border: ${theme.borders.width} ${theme.borders.style} ${theme.borders.color};
`;

const CalendarTable = () => {
  let days = [];
  for (let i = 0; i < 4; i += 1) {
    days.push(<EmptyCell />);
  }
  for (let j = 0; j < 27; j += 1) {
    j % 2 === 0 ? (days.push(<AvailableDay>{j + 4}</AvailableDay>)) : (days.push(<UnavailableDay>{j + 4}</UnavailableDay>));
  }
  let days1 = days.slice(0, 7);
  let days2 = days.slice(7, 14);
  let days3 = days.slice(14, 21);
  let days4 = days.slice(21, 28);
  let days5 = days.slice(28);
  return (
    <StyledCalendarTable>
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
    </StyledCalendarTable>
  );
};


export default CalendarTable;
