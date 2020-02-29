import React from 'react';
import Input from 'components/Input/Input';
import classes from './SearchForm.module.scss';

export default function SearchForm({ input, onInputChange }) {
  return (
    <form
      className={classes.SearchForm}
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <Input
        label={input.label}
        defaultValue={input.value}
        onChange={e => onInputChange(e.target.value)}
      />
    </form>
  );
}
