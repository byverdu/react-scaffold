import React from 'react';
import ReactDOM from 'react-dom';
import TodoComponent from 'Features/Todo/views/TodosContainer';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import rootState from '__fixtures__/rootState';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(rootState);

describe('<TodoComponent />', () => {
  let wrapper;
  const component = () => (
    <Provider store={store}>
      <TodoComponent />
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

  it('should render VisibilityFilter if has some todos', () => {
    expect(wrapper.find('VisibilityFilter')).toHaveLength(1);
  });

  it('should render a AddTodo component', () => {
    expect(wrapper.find('AddTodo')).toHaveLength(1);
  });
});
