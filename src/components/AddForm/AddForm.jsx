import React, { useState } from 'react';
import { validateInputs } from 'utils/validateInputs';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import classes from './AddForm.module.scss';

export default function AddForm({
  inputs,
  onAdd,
  handleFormSubmit,
  onInputChange
}) {
  const [validationErrors, setValidationErrors] = useState(true);

  return (
    <form className={classes.AddForm} onSubmit={handleFormSubmit}>
      {inputs.map(input => (
        <Input
          key={input.name}
          value={input.value}
          label={input.label}
          handleChange={e => onInputChange(e.target.value, input.name)}
        />
      ))}

      <Button
        handleClick={() => {
          const validation = validateInputs(inputs);

          if (typeof validation === 'string') {
            setValidationErrors(validation);
            return;
          } else {
            setValidationErrors(true);
          }
          onAdd();
        }}
      >
        Submit
      </Button>
      {validationErrors && (
        <h1 className={classes.ErrorAlert}>{validationErrors}</h1>
      )}
    </form>
  );
}
