import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import { compose } from 'recompose';
import { rootSaga } from './sagas/rootSaga';
import { loadBooks } from './actions/actions';

const LOCAL_STORAGE_KEY = 'redux-store';

const preLoadedState =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || undefined;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  preLoadedState,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);
sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(store.getState()));
});

store.dispatch(loadBooks());

export default store;
