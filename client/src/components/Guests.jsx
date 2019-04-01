import React from 'react';
import styled from 'styled-components';
import theme from './themes/default';

const GuestContainer = styled.div`
  width: 100%;
  // Tech debt: may need margin when dropdown not rendered;
`;

const GuestLabel = styled.label`
  font-weight: 600;
  font-size: ${theme.fonts.size[3]};
  color: ${theme.fonts.color[0]};
  line-height: ${theme.fonts.lineHeight[1]};
`;

const GuestButton = styled.button`
  padding-left: 12px;
  padding-right: 12px;
  background-color: rgb(255, 255, 255);
  margin: 0px;
  border-width: ${theme.borders.width};
  border-style: ${theme.borders.style};
  border-color: ${theme.borders.color};
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-around;
  width: 100%;
  height: 40px;
  // Tech debt: update border to 2 px on bottom when clicked (and remove when collapsed)
`;

const GuestArrow = styled.svg`
  height: 16px;
  width: 16px;
`;

const GuestTextContainer = styled.div`
  width: 90%;
  display: flex;
  flex-flow: row no-wrap;
  justify-content; center;
`;

const GuestHighlighter = styled.span`
  height: 22px;

  // Tech debt: update on state implementation to add on-click effect;
  &:focus {
    padding: 4.25px 8.5px;
    border-radius: 3px;
    background-color: ${theme.palette.primary[6]};
    outline: none;
  }

`;

const GuestText = styled.span`
  width: 70px;
  margin: 0px;
  font-size: ${theme.fonts.size[1]};
  font-weight: 400;
  color: ${theme.fonts.color[0]};
  font-family: ${theme.fonts.primary};
`;

const Guests = props => (
  <GuestContainer>
    <GuestLabel>Guests</GuestLabel>
    <GuestButton>
      <GuestTextContainer>
        <GuestHighlighter className="bm-highlighter">
          <GuestText>5 Guests,</GuestText>
        </GuestHighlighter>
        <GuestHighlighter className="bm-highlighter">
          <GuestText> 2 Infants</GuestText>
        </GuestHighlighter>
      </GuestTextContainer>
      <GuestArrow viewBox="0 0 18 18">
        <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd" />
      </GuestArrow>
    </GuestButton>
  </GuestContainer>
);


export default Guests;
