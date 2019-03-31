import React from 'react';
import ReportListing from './ReportListing';
import BookingContainer from './BookingContainer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('./themes)
    font-family: 'Circular'
  }
  `

const BookingModule = props => (
  <div id="bm-top-margin">
    <div id="bm-parent-container">
      <GlobalStyles />
      <BookingContainer />
      <ReportListing />
    </div>
  </div>
  );

export default BookingModule;
