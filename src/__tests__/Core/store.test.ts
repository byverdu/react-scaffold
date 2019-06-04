import { configureStore } from 'Core/store';

it('initializes a valid store', () => {
  const store = configureStore();
  expect(Object.keys(store)).toEqual([
    'dispatch',
    'subscribe',
    'getState',
    'replaceReducer'
  ]);
});
