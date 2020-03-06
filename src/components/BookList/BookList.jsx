import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import BookCard from 'components/BookCard/BookCard';
import classes from './BookList.module.scss';

export default function BookList({ books, getBooks, onDelete }) {
  useEffect(() => {
    console.log('effect');

    getBooks();
  }, []);

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
