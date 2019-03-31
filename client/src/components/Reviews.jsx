import React, { Component } from 'react';
import Stars from './Stars';

const Reviews = props => {
  return (
    <div id="bm-reviews-container">
        <Stars />
        <span id="bm-stars-label"> 155 </span>
    </div>
  )
}

export default Reviews;
