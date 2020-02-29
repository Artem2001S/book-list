import React from 'react';
import Input from 'components/Input/Input';
import classes from './SearchForm.module.scss';
import Button from 'components/Button/Button';

export default function SearchForm({ input, onInputChange, onSearch }) {
  return (
    <form
      className={classes.SearchForm}
      onSubmit={e => {
        e.preventDefault();
        onSearch();
      }}
    >
      <Input
        label={input.label}
        defaultValue={input.value}
        onChange={e => onInputChange(e.target.value)}
      />

      <Button
        onClick={() => {
          onSearch();
        }}
      >
        Search
      </Button>
    </form>
  );
}
