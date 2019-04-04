import React from 'react';
import styled from 'styled-components';
import PriceLabel from './PriceLabel';
import { Reviews } from './Reviews';
import theme from './themes/default';

const LineBreak = styled.div`
  margin: 15px 3px;
  border-bottom: ${theme.borders.width} ${theme.borders.style} ${theme.borders.color};
`;

const PriceReview = () => (
  <div id="bm-price-review-container">
    <PriceLabel />
    <Reviews />
    <LineBreak />
  </div>
);

export default PriceReview;
