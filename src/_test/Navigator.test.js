import React from 'react';
import {expect} from 'chai';
import Navigator from '../components/Navigator';
import {shallow} from 'enzyme';
import sinon from 'sinon';

const emptyEvent =
  {
    preventDefault: () => {},
    stopPropagation: () => {}
  }

describe('Navigator component', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<Navigator />);
    expect(wrapper.find('.Navigator')).to.have.length(1); 
  });

  describe('add link', () => {
    it('calls onAddClick', () => {
      // Setup
      let spy = sinon.spy();
      let wrapper = shallow(
        <Navigator view="find" onAddClick={ spy }/>
      );

      // Exercise
      console.log(wrapper.find('NavLink').at(0).html());
      wrapper.find('NavLink').at(0).simulate('click', emptyEvent);

      // Assert
      expect(spy.calledOnce);
    });
  });
});

