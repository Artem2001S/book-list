import React from 'react';
import PropTypes from 'prop-types';
import BookCard from 'components/BookCard/BookCard';
import classes from './BookList.module.scss';

export default function BookList({ books, deleteHandler }) {
  return (
    <div className={classes.BookList}>
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.array.isRequired
};
