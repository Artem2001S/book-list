import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import classes from './AddForm.module.scss';

export default function AddForm({
  inputs,
  validationErrors,
  inputChangeHandlers,
  onAdd,
  handleFormSubmit
}) {
  return (
    <form className={classes.AddForm} onSubmit={handleFormSubmit}>
      {inputs.map(input => (
        <Input
          key={input.name}
          value={input.value}
          label={input.label}
          handleChange={inputChangeHandlers[input.name]}
        />
      ))}

      <Button handleClick={onAdd}>Add</Button>
      {validationErrors && (
        <h1 className={classes.ErrorAlert}>{validationErrors}</h1>
      )}
    </form>
  );
}

AddForm.propTypes = {
  inputs: PropTypes.array.isRequired,
  validationErrors: PropTypes.string,
  inputChangeHandlers: PropTypes.object,
  onAdd: PropTypes.func,
  handleFormSubmit: PropTypes.func
};
