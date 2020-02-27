import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import BookPage from 'pages/BookPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/items/:itemId">
          <BookPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
