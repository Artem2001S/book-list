import React from 'react';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import classes from './AddForm.module.scss';

export default function AddForm({ inputs, onSubmit, onInputChange }) {
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
          label={input.label}
          onChange={e => onInputChange(e, input.name)}
        />
      ))}

      <Button
        onClick={() => {
          onSubmit(...inputs.map(input => input.value));
        }}
      >
        Submit
      </Button>
    </form>
  );
}
