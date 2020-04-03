import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import classes from './BookControl.module.scss';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';

export default function BookControl({
  inputs,
  isEditMode,
  bookData,
  validationStatus,
  isLoading,
  haveErrors,
  inputChangeHandlers,
  onSave,
  handleFormSubmit
}) {
  if (isLoading && !bookData) {
    return <Loader />;
  }

  if (!bookData) {
    return <h1>Book not found</h1>;
  }

  if (haveErrors) return <Error message={haveErrors} />;

  return (
    <form className={classes.BookControlForm} onSubmit={handleFormSubmit}>
      {inputs.map(input => (
        <Input
          key={input.name}
          disabled={!isEditMode}
          label={input.label}
          defaultValue={bookData[input.name]}
          handleChange={inputChangeHandlers[input.name]}
        />
      ))}

      {validationStatus && (
        <h1 className={classes.ErrorAlert}>{validationStatus}</h1>
      )}

      <Button handleClick={onSave}>{isEditMode ? 'Save' : 'Edit'}</Button>

      {isLoading && <Loader />}
    </form>
  );
}

BookControl.propTypes = {
  inputs: PropTypes.array,
  bookData: PropTypes.object,
  isEditMode: PropTypes.bool,
  validationStatus: PropTypes.string,
  isLoading: PropTypes.bool,
  haveErrors: PropTypes.bool,
  inputChangeHandlers: PropTypes.object,
  onSave: PropTypes.func,
  handleFormSubmit: PropTypes.func
};
