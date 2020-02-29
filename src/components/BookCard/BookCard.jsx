import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './BookCard.module.scss';

export default function BookCard({ book, index, deleteHandler }) {
  return (
    <div className={classes.BookCard}>
      <div className={classes.BookTitle}>{book.bookTitle}</div>
      <div className={classes.BookAuthors}>{book.author}</div>
      <button className={classes.RemoveBtn} onClick={deleteHandler}>
        &times;
      </button>
      <Link to={`items/${index}`} className={classes.OpenBtn}>
        Open
      </Link>
    </div>
  );
}

BookCard.propTypes = {
  book: PropTypes.exact({
    id: PropTypes.string.isRequired,
    bookTitle: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    pagesCount: PropTypes.string.isRequired
  }),
  removeHandler: PropTypes.func
};
