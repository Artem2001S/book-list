import React, { useState } from 'react';
import { validateInputs } from 'utils/validateInputs';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import classes from './AddForm.module.scss';

export default function AddForm({ inputs, onSubmit, onInputChange }) {
  const [validationErrors, setValidationErrors] = useState(true);

  return (
    <form
      className={classes.AddForm}
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      {inputs.map(input => (
        <Input
          key={input.name}
          defaultValue={input.value}
          label={input.label}
          onChange={e => onInputChange(e, input.name)}
        />
      ))}

      <Button
        onClick={() => {
          const validation = validateInputs(inputs);

          if (validation !== true) {
            setValidationErrors(validation);
            return;
          } else {
            setValidationErrors(true);
          }

          onSubmit(...inputs.map(input => input.value));
        }}
      >
        Submit
      </Button>
      {validationErrors === true || (
        <h1 className={classes.ErrorAlert}>{validationErrors}</h1>
      )}
    </form>
  );
}
