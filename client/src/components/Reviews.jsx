import React from 'react';
import Stars from './Stars';
import styled from 'styled-components';
import theme from './themes/default';

const ReviewContainer = styled.div`

`;

const ReviewLabel = styled.span`
  font-family: ${theme.fonts.primary};
  font-weight: 600;
  font-size: ${theme.fonts.size[2]};
  line-height: ${theme.fonts.lineHeight[1]};
  color: ${theme.fonts.color};
`;


const Reviews = props => {
  return (
    // to-do: wrap stars and review label in button to allow navigation on-screen
    <ReviewContainer>
        <Stars />
        <ReviewLabel> 155 </ReviewLabel>
    </ReviewContainer>
  )
}

export default Reviews;
