import React from 'react';
import AddFormContainer from 'containers/AddFormContainer';
import BookListContainer from 'containers/BookListContainer';

export default function HomePage() {
  return (
    <>
      <AddFormContainer />
      <BookListContainer />
    </>
  );
}
