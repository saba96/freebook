import React from 'react';
import {expect} from 'chai';
import App from '../components/App';
import {shallow} from 'enzyme';


it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App')).to.have.length(1); 
  // expect(wrapper.find('button')).to.have.length(3); 
});
