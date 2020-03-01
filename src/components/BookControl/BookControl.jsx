import React from 'react';
import Input from 'components/Input/Input';

export default function BookControl({ inputs, bookData, saveHandler }) {
  if (bookData === undefined) return <h1>Book don't found</h1>;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      {inputs.map(input => (
        <Input
          key={input.name}
          label={input.label}
          defaultValue={input.value}
        />
      ))}
    </form>
  );
}
