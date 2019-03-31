import React from 'react';
import styled from 'styled-components';
import theme from './themes/default';

const DateMargin = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;
`;

const DateLabel = styled.label`
  font-weight: 600;
  font-size: ${theme.fonts.size[3]};
  color: ${theme.fonts.color[0]};
  line-height: ${theme.fonts.lineHeight[1]};
`;

const DateContainer = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  background-color: rgb(255, 255, 255);
  margin: 0px;
  border-width: ${theme.borders.width};
  border-style: ${theme.borders.style};
  border-color: ${theme.borders.color};
  display: flexbox;
  flex-flow: row no-wrap;
`;

const Arrow = styled.svg`
  padding: 8px 4px 8px 4px;
  height: 24px;
  width: 24px;
`;

const DateSelector = styled.div`
  width: 165px;
  line-height: 24px;
  padding: 8px;
`;

const DateInput = styled.input`
  padding: 4px 0px 0px 0px;
  font-size: ${theme.fonts.size[1]};
  font-weight: 400;
  color: ${theme.fonts.color[0]};
  font-family: ${theme.fonts.primary};
  border: 0px;
`;

const Dates = props => {
  return (
    <DateMargin>
      <DateLabel> Dates </DateLabel>
      <DateContainer>
        <DateSelector>
          <DateInput placeholder="Check In"/>
        </DateSelector>
        <Arrow viewBox="0 0 24 24">
          <path d="m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z" fill-rule="evenodd"></path>
        </Arrow>
        <DateSelector>
          <DateInput placeholder="Check Out"/>
        </DateSelector>
      </DateContainer>
    </DateMargin>
  )
}

export default Dates;