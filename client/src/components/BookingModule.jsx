import React, { Component } from 'react';
import ReportListing from './ReportListing';
import BookingContainer from './BookingContainer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('./themes)
    font-family: 'Circular'
  }
  `

class BookingModule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accommodationid: Math.floor(Math.random() * 100),
      data: {},
    }
  }


  componentDidMount() {
    this.getBookingInfo.call(this);
  }

  async getBookingInfo() {
    const { accommodationid } = this.state;
    const response = await fetch(`/bookings/${accommodationid}/reserve`);
    const data = await response.json();
    this.setState({
      data: data,
    });
  }

  
  render () {
    return (
      <div id="bm-top-margin">
        <div id="bm-parent-container">
          <GlobalStyles />
          <BookingContainer />
          <ReportListing />
        </div>
      </div>
      );
  }
} 

export default BookingModule;
