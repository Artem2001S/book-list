import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import classes from './BookControl.module.scss';
import { validateInputs } from 'utils/validateInputs';

export default function BookControl({
  defaultValues,
  inputs,
  bookData,
  onSave,
  handleFormSubmit,
  onInputChange
}) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [validationErrors, setValidationErrors] = useState(true);

  useEffect(() => {
    // send default values to redux store (for inputs)
    if (defaultValues && onInputChange) {
      Object.keys(defaultValues).forEach(name => {
        onInputChange(defaultValues[name], name);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (bookData === undefined) {
    return <h1>Book not found</h1>;
  }

  return (
    <form className={classes.BookControlForm} onSubmit={handleFormSubmit}>
      {inputs.map(input => (
        <Input
          key={input.name}
          disabled={!isEditMode}
          label={input.label}
          defaultValue={defaultValues[input.name]}
          handleChange={e => {
            onInputChange(e.target.value, input.name);
          }}
        />
      ))}

      {validationErrors === true || (
        <h1 className={classes.ErrorAlert}>{validationErrors}</h1>
      )}

      <Button
        handleClick={() => {
          if (isEditMode) {
            const validation = validateInputs(inputs);

            if (validation !== true) {
              setValidationErrors(validation);
              return;
            } else {
              setValidationErrors(true);
            }

            onSave();
          }

          setIsEditMode(!isEditMode);
        }}
      >
        {isEditMode ? 'Save' : 'Edit'}
      </Button>
    </form>
  );
}

BookControl.propTypes = {
  defaultValues: PropTypes.object,
  inputs: PropTypes.array,
  bookData: PropTypes.object,
  onSave: PropTypes.func,
  onInputChange: PropTypes.func
};
