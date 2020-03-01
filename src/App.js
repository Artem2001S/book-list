import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import HomePage from 'pages/HomePage';
import BookPage from 'pages/BookPage';
import NotFoundPage from 'pages/NotFoundPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/search?value=:v">
            <h1>Search</h1>
          </Route>
          <Route exact path="/items/:itemId">
            <BookPage />
          </Route>
          <Route path="/">
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
