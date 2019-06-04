import React from 'react';
import ReactDOM from 'react-dom';
import App from 'Features/App/App';
import enzyme, { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import rootState from '__fixtures__/rootState';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(rootState);

describe('<App />', () => {
  let wrapper;
  const component = () => (
    <Provider store={store}>
      <App />
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

  it('should render a TodosContainer', () => {
    expect(wrapper.find('TodosContainer')).toHaveLength(1);
  });
});
