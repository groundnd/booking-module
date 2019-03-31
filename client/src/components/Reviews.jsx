import React, { Component } from 'react';
import Stars from './Stars';
import styled from 'styled-components';
import theme from './themes/default';

const ReviewLabel = styled.span`
  font-family: ${theme.fonts.primary};
  font-weight: 600;
  font-size: ${theme.fonts.size[2]};
  line-height: ${theme.fonts.lineHeight[1]};
  color: ${theme.fonts.color};
`;

const Reviews = props => {
  return (
    <div id="bm-reviews-container">
        <Stars />
        <ReviewLabel> 155 </ReviewLabel>
    </div>
  )
}

export default Reviews;
