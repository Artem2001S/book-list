import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { compose } from 'recompose';
import { fetchBooks } from './operations/books';

const LOCAL_STORAGE_KEY = 'redux-store';

const preLoadedState =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || undefined;

const store = createStore(
  rootReducer,
  preLoadedState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

store.subscribe(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(store.getState()));
});

store.dispatch(fetchBooks());

export default store;
