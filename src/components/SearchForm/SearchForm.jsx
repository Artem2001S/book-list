import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useQuery from 'utils/useQuery';
import Input from 'components/Input/Input';
import classes from './SearchForm.module.scss';

export default function SearchForm({
  input,
  onSearchInputChange,
  handleFormSubmit,
  handleSearchInputChange
}) {
  const history = useHistory();
  const value = useQuery().get('search');

  useEffect(() => {
    if (value) {
      if (input.value.trim() !== value) {
        onSearchInputChange(value);
      }
    } else {
      onSearchInputChange('');
    }
  }, [input.value, onSearchInputChange, value]);

  return (
    <form className={classes.SearchForm} onSubmit={handleFormSubmit}>
      <Input
        label={input.label}
        value={input.value}
        handleChange={handleSearchInputChange.bind(this, history)}
      />
    </form>
  );
}
