import React, { useState } from 'react';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

export default function BookControl({
  defaultValues,
  inputs,
  bookData,
  saveHandler,
  onInputChange
}) {
  const [isEditMode, setIsEditMode] = useState(false);

  if (bookData === undefined) return <h1>Book not found</h1>;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <Button
        onClick={() => {
          if (isEditMode) {
            const data = inputs.reduce((acc, next) => {
              return {
                ...acc,
                [next.name]: next.value || defaultValues[next.name]
              };
            }, {});
            saveHandler(bookData.id, data);
          }
          setIsEditMode(!isEditMode);
        }}
      >
        {isEditMode ? 'Save' : 'Edit'}
      </Button>

      {inputs.map(input => (
        <Input
          key={input.name}
          disabled={!isEditMode}
          label={input.label}
          defaultValue={defaultValues[input.name]}
          onChange={e => {
            onInputChange(e.target.value, input.name);
          }}
        />
      ))}
    </form>
  );
}
