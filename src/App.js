import React from 'react';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import BookCard from 'components/BookCard/BookCard';

function App() {
  return (
    <div>
      <Input />
      <Button>Btn</Button>
      <BookCard book={{ id: 1, bookTitle: '123', author: 'authors' }} />
    </div>
  );
}

export default App;
