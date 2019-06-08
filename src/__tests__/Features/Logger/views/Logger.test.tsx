import React from 'react';
import ReactDOM from 'react-dom';
import Logger from 'Features/Logger/views/Logger';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { LoggerTypes } from 'Models/Enums';

describe('<VisibilityFilter />', () => {
  let wrapper;
  const component = () => (
    <Logger
      message="Logger Component"
      isVisible={true}
      type={LoggerTypes.success}
      toggleVisibility={() => {}}
    />
  );

  beforeEach(() => {
    wrapper = mount(component());
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(component(), div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should create a snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
