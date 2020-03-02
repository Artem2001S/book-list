import React from 'react';
import { useParams } from 'react-router-dom';
import BookControlContainer from 'containers/BookControlContainer';

export default function BookPage() {
  const { index } = useParams();

  return <BookControlContainer index={index} />;
}
