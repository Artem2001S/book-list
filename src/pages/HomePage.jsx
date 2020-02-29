import React from 'react';
import AddFormContainer from 'containers/AddFormContainer';
import VisibleBookListContainer from 'containers/VisibleBookListContainer';
import SearchFormContainer from 'containers/SearchFormContainer';

export default function HomePage() {
  return (
    <>
      <AddFormContainer />
      <SearchFormContainer />
      <VisibleBookListContainer />
    </>
  );
}
