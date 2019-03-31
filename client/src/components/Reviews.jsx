import React from 'react';
import Stars from './Stars';
import styled from 'styled-components';
import theme from './themes/default';

const ReviewContainer = styled.div`

`;

const ReviewLabel = styled.span`
  font-family: ${theme.fonts.primary};
  font-weight: 600;
  font-size: ${theme.fonts.size[3]};
  line-height: ${theme.fonts.lineHeight[1]};
  color: ${theme.fonts.color[0]};
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
