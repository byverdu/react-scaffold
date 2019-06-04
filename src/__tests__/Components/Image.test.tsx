import React from 'react';
import Image from 'Components/Image';
import enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('<Image />', () => {
  const wrapper: enzyme.ShallowWrapper = shallow(<Image />);

  it('should create a snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
