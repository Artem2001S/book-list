import React from 'react';
import BookList from 'components/BookList/BookList';
import AddFormContainer from 'containers/AddFormContainer';
import BookListContainer from 'containers/BookListContainer';

export default function HomePage() {
  const books = [
    { id: 1, bookTitle: '123', author: 'authors' },
    { id: 2, bookTitle: '123', author: 'authors' },
    { id: 3, bookTitle: '123', author: 'authors' },
    { id: 4, bookTitle: '123', author: 'authors' },
    { id: 5, bookTitle: '123', author: 'authors' },
    { id: 6, bookTitle: '123', author: 'authors' },
    { id: 7, bookTitle: '123', author: 'authors' },
    { id: 8, bookTitle: '123', author: 'authors' },
    { id: 9, bookTitle: '123', author: 'authors' }
  ];

  return (
    <div>
      <AddFormContainer />
      <BookListContainer />
    </div>
  );
}
