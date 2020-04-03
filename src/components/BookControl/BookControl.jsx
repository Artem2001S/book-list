import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import classes from './BookControl.module.scss';
import Loader from 'components/Loader/Loader';
import Error from 'components/Error/Error';
import {
  updateInputsArray,
  updateInputsArrayCompletely
} from 'utils/changeInputsArray';
import { validateInputs } from 'utils/validateInputs';

export default function BookControl({
  // isEditMode,
  bookData,
  // validationStatus,
  isLoading,
  haveErrors,
  onSave,
  changeValidationStatus,
  handleFormSubmit
}) {
  const [inputValues, setInputValues] = useState([
    {
      name: 'bookTitle',
      label: 'Book Title',
      value: bookData ? bookData.bookTitle : ''
    },
    {
      name: 'authors',
      label: 'Authors',
      value: bookData ? bookData.authors : ''
    },
    {
      name: 'pagesCount',
      label: 'Pages count',
      value: bookData ? bookData.pagesCount : ''
    },
    {
      name: 'category',
      label: 'Category',
      value: bookData ? bookData.category : ''
    }
  ]);
  // console.log(bookData);
  // console.log(inputValues);

  const [isEditMode, setIsEditMode] = useState(false);
  const [validationStatus, setValidationStatus] = useState('');

  // useEffect(() => {
  //   if (bookData) {
  //     Object.keys(bookData).forEach(name => {
  //       setInputValues(updateInputsArray(inputValues, name, bookData[name]));
  //     });
  //   }
  // }, [bookData]);

  if (isLoading && !bookData) {
    return <Loader />;
  }

  if (!bookData) {
    return <h1>Book not found</h1>;
  }

  if (haveErrors) return <Error message={haveErrors} />;

  return (
    <form className={classes.BookControlForm} onSubmit={handleFormSubmit}>
      {inputValues.map(input => (
        <Input
          key={input.name}
          disabled={!isEditMode}
          label={input.label}
          defaultValue={bookData[input.name]}
          handleChange={e =>
            setInputValues(
              updateInputsArray(inputValues, input.name, e.target.value)
            )
          }
        />
      ))}

      {validationStatus && (
        <h1 className={classes.ErrorAlert}>{validationStatus}</h1>
      )}

      <Button
        handleClick={() => {
          if (isEditMode) {
            const validationResult = validateInputs(inputValues);
            if (validationResult) {
              setValidationStatus(validationResult);
              return;
            }

            // get data from inputs
            const data = inputValues.reduce((acc, next) => {
              return {
                ...acc,
                [next.name]: next.value
              };
            }, {});

            onSave(bookData.id, data);
            setValidationStatus('');
          } else {
            updateInputsArrayCompletely(inputValues, bookData);
          }
          setIsEditMode(!isEditMode);
        }}
      >
        {isEditMode ? 'Save' : 'Edit'}
      </Button>

      {isLoading && <Loader />}
    </form>
  );
}

BookControl.propTypes = {
  defaultValues: PropTypes.object,
  inputs: PropTypes.array,
  bookData: PropTypes.object,
  onSave: PropTypes.func,
  isEditMode: PropTypes.bool,
  validationStatus: PropTypes.string,
  isLoading: PropTypes.bool,
  haveErrors: PropTypes.bool,
  inputChangeHandlers: PropTypes.object,
  handleFormSubmit: PropTypes.func,
  changeInputValue: PropTypes.func
};
