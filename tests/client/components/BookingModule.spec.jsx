import React from 'react';
import { shallow } from 'enzyme';

//Components
import BookingModule from '../../../client/src/components/BookingModule';


describe('Booking Module', () => {
  const wrapper = shallow(<BookingModule />);


  test('should exist', () => {
    expect(wrapper.text()).toEqual('Hello World');
  });
});
