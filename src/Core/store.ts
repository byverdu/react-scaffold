import rootReducer, { RootState } from 'Core/reducers';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export function configureStore() {
  const middleware = applyMiddleware(thunk);
  let store;

  if (process.env.NODE_ENV === 'development') {
    const composeEnhancers = composeWithDevTools({
      trace: true,
      traceLimit: 25
    });
    store = createStore(
      rootReducer,
      undefined,
      composeEnhancers(middleware)
    ) as Store<RootState>;
  } else {
    store = createStore(rootReducer, undefined, middleware) as Store<RootState>;
  }

  if (process.env.NODE_ENV === 'development' && (module as any).hot) {
    (module as any).hot.accept('Core/reducers', () =>
      store.replaceReducer(rootReducer)
    );
  }

  return store;
}
