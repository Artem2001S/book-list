import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useQuery from 'utils/useQuery';
import Input from 'components/Input/Input';
import classes from './SearchForm.module.scss';

export default function SearchForm({ input, onInputChange }) {
  const history = useHistory();

  const value = useQuery().get('search');

  useEffect(() => {
    if (value !== null) {
      if (input.value.trim() !== value) {
        onInputChange(value);
      }
    }

    if (value === null) {
      onInputChange('');
    }
  }, [input.value, onInputChange, value]);

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
        onChange={e => {
          onInputChange(e.target.value);

          if (e.target.value.trim()) {
            history.push(`?search=${e.target.value}`);
          } else {
            history.push('/');
          }
        }}
      />
    </form>
  );
}
