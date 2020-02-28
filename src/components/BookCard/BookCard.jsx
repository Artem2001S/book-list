import React from 'react';
import PropTypes from 'prop-types';
import { Link, BrowserRouter } from 'react-router-dom';
import classes from './BookCard.module.scss';

export default function BookCard({ book, index, deleteHandler }) {
  return (
    <div className={classes.BookCard}>
      <div className={classes.BookTitle}>{book.bookTitle}</div>
      <div className={classes.BookAuthors}>{book.author}</div>
      <button className={classes.RemoveBtn} onClick={deleteHandler}>
        &times;
      </button>
      <BrowserRouter>
        <Link to={`items/${index}`} className={classes.OpenBtn}>
          Open
        </Link>
      </BrowserRouter>
    </div>
  );
}

BookCard.propTypes = {
  book: PropTypes.exact({
    id: PropTypes.number.isRequired,
    bookTitle: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }),
  removeHandler: PropTypes.func
};
