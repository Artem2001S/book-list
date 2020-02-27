import React from 'react';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import BookList from 'components/BookList/BookList';

function App() {
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
      <Input />
      <Button>Btn</Button>

      <BookList books={books} />
    </div>
  );
}

export default App;
