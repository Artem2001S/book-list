import React from 'react';
import PropTypes from 'prop-types';
import BookCard from 'components/BookCard/BookCard';
import classes from './BookList.module.scss';

export default function BookList({ books, onDelete }) {
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
    </div>
  );
}

BookList.propTypes = {
  getBooks: PropTypes.func,
  onDelete: PropTypes.func
};
