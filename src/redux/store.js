import { createStore } from 'redux';
import rootReducer from './rootReducer';

const LOCAL_STORAGE_KEY = 'redux-store';

const preLoadedState =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || undefined;

const store = createStore(
  rootReducer,
  preLoadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(store.getState()));
});

export default store;
