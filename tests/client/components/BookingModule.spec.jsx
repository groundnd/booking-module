import React from 'react';
import { shallow } from 'enzyme';
import '@babel/polyfill';

// Components
import BookingModule from '../../../client/src/components/BookingModule';


describe('Booking Module', () => {
  const wrapper = shallow(<BookingModule />);

  test('should exist', () => {
    expect(wrapper.text()).toEqual('<GlobalStyleComponent /><BookingContainer /><ReportListing />');
  });
});
