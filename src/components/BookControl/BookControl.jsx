import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import classes from './BookControl.module.scss';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';

export default function BookControl({
  defaultValues,
  inputs,
  isEditMode,
  bookData,
  validationStatus,
  isLoading,
  haveErrors,
  inputChangeHandlers,
  onSave,
  handleFormSubmit,
  changeInputValue
}) {
  useEffect(() => {
    // send default values to redux store (for inputs)
    if (defaultValues && changeInputValue) {
      Object.keys(defaultValues).forEach(name => {
        changeInputValue(defaultValues[name], name);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          defaultValue={defaultValues[input.name]}
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
  defaultValues: PropTypes.object,
  inputs: PropTypes.array,
  bookData: PropTypes.object,
  onSave: PropTypes.func,
  onInputChange: PropTypes.func
};
