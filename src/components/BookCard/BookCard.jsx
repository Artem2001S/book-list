import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './BookCard.module.scss';

export default function BookCard({ book, index, onDelete }) {
  const onDeleteWithParams = useCallback(() => {
    onDelete(book.id);
  }, [book.id, onDelete]);

  return (
    <div className={classes.BookCard}>
      <div className={classes.BookTitle}>{book.bookTitle}</div>
      <div className={classes.BookAuthors}>{book.authors}</div>
      <button className={classes.RemoveBtn} onClick={onDeleteWithParams}>
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
    authors: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    pagesCount: PropTypes.string.isRequired
  }),
  onDelete: PropTypes.func
};
