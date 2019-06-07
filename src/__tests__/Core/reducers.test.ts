import { createStore } from 'redux';

import reducers from 'Core/reducers';

it('defines the necessary reducers', () => {
  const store = createStore(reducers, {});
  expect(Object.keys(store.getState())).toEqual([
    'todos',
    'visibilityFilter',
    'logger'
  ]);
});
