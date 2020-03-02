import React, { useState, useEffect } from 'react';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import classes from './BookControl.module.scss';
import { validateInputs } from 'utils/validateInputs';

export default function BookControl({
  defaultValues,
  inputs,
  bookData,
  saveHandler,
  onInputChange
}) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [validationErrors, setValidationErrors] = useState(true);

  useEffect(() => {
    // send default values to redux store (for inputs)
    Object.keys(defaultValues).forEach(name => {
      onInputChange(defaultValues[name], name);
    });
  }, []);

  if (bookData === undefined) {
    return <h1>Book not found</h1>;
  }

  return (
    <form
      className={classes.BookControlForm}
      onSubmit={e => {
        e.preventDefault();
      }}
    >
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

      {validationErrors === true || (
        <h1 className={classes.ErrorAlert}>{validationErrors}</h1>
      )}

      <Button
        onClick={() => {
          if (isEditMode) {
            const validation = validateInputs(inputs);

            if (validation !== true) {
              setValidationErrors(validation);
              return;
            } else {
              setValidationErrors(true);
            }

            // get data from inputs
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
    </form>
  );
}
