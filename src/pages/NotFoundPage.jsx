import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>404</h1>
      <h3 style={{ textAlign: 'center' }}>
        Go to <Link to="/">Home</Link>
      </h3>
    </>
  );
}
