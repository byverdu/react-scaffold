import React from 'react';
import ReactDOM from 'react-dom';
import VisibilityFilter from 'Features/VisibilityFilter/views/VisibilityFilter';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import rootState from '__fixtures__/rootState';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(rootState);

describe('<VisibilityFilter />', () => {
  let wrapper;
  const component = () => (
    <Provider store={store}>
      <VisibilityFilter />
    </Provider>
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

  it('should render 3 inputs', () => {
    expect(wrapper.find('input[type="radio"]')).toHaveLength(3);
  });

  it('SHOW_ALL input should be checked by default', () => {
    expect(wrapper.find('input[id="SHOW_ALL"]').props().checked).toEqual(true);
  });
});
