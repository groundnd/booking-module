import React, { Component } from 'react';
import styled from 'styled-components';
import theme from './themes/default';

const Price = styled.span`
  font-family: ${theme.fonts.primary};
  font-weight: 800;
  font-size: ${theme.fonts.size[0]};
  line-height: ${theme.fonts.lineHeight};
  color: ${theme.fonts.color};
  `;

const PerNight = styled.span`
  font-family: ${theme.fonts.primary};
  font-weight: 600;
  font-size: ${theme.fonts.size[2]};
  line-height: ${theme.fonts.lineHeight[1]};
  color: ${theme.fonts.color};
`;

const PriceLabel = props => {
  return (
    <div id="bm-price-label-container">
      <Price>$45</Price>
      <PerNight> per night</PerNight>
    </div>
  )
}

export default PriceLabel;
