import React from 'react';
import AddFormContainer from 'containers/AddFormContainer';
import BookListContainer from 'containers/BookListContainer';
import SearchFormContainer from 'containers/SearchFormContainer';

export default function HomePage() {
  return (
    <>
      <AddFormContainer />
      <SearchFormContainer />
      <BookListContainer />
    </>
  );
}
