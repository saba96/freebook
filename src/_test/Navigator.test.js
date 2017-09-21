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

  it('has two navigation links', () => {
    const wrapper = shallow(<Navigator />);
    expect(wrapper.find('NavLink')).to.have.length(2);
  });

  describe('add link', () => {
    it('calls onAddClick', () => {
      // Setup
      let spy = sinon.spy();
      let wrapper = shallow(
        <Navigator view="find" onAddClick={ spy }/>
      );

      // Exercise
      wrapper.find('NavLink').at(0).simulate('click', emptyEvent);

      // Assert
      expect(spy.calledOnce);
    });
  });

  describe('find link', () => {
    it('calls onFindClick', () => {
      // Setup
      let spy = sinon.spy();
      let wrapper = shallow(
        <Navigator view="find" onFindClick={ spy }/>
      );

      // Exercise
      wrapper.find('NavLink').at(1).simulate('click', emptyEvent);

      // Assert
      expect(spy.calledOnce);
    });
  });
});

