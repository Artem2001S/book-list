import React from 'react';
import PropTypes from 'prop-types';
import BookCard from 'components/BookCard/BookCard';
import classes from './BookList.module.scss';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';

export default function BookList({ books, isLoading, haveErrors, onDelete }) {
  if (haveErrors) return <Error message={haveErrors} />;

  return (
    <div className={classes.BookList}>
      {books.map((book, index) => (
        <BookCard
          key={book.id}
          book={book}
          index={index + 1}
          onDelete={onDelete}
        />
      ))}
      {isLoading && <Loader />}
    </div>
  );
}

BookList.propTypes = {
  getBooks: PropTypes.func,
  onDelete: PropTypes.func
};
