import React from 'react';
import { shallow } from 'enzyme';

//Components
import BookingModule from '../../../client/src/BookingModule';


describe('Booking Module', () => {
  const wrapper = shallow(<BookingModule />);

  function EmptyRenderFixture() {
    return null;
  }

  test('should exist', () => {
    expect(wrapper.text()).toEqual('Hello World');
  });
});
