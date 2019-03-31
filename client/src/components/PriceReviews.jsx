import React, { Component } from 'react';
import PriceLabel from './PriceLabel';
import Reviews from './Reviews';

const PriceReview = props => {
  return (
    <div id="bm-price-review-container">
      <PriceLabel />
      <Reviews />
      <div id="bm-price-reviews-bottom-border"></div>
    </div>
  )
}

export default PriceReview;
