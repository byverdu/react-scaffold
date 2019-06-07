import React from 'react';
import rootState from '__fixtures__/rootState';
import Todos from 'Features/Todo/Components/Todos';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('<Todos />', () => {
  const todos = rootState.todos.todos;
  const wrapper = mount(
    <Todos todos={todos} checkHandler={jest.fn()} deleteTodo={jest.fn()} />
  );

  it('should create a snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render as many TodoItem as the size of the state', () => {
    expect(wrapper.find('TodoItem')).toHaveLength(todos.size);
  });
});
