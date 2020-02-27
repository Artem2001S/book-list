import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv1 } from 'uuid';
import classes from './Input.module.scss';

export default function Input({ label, defaultValue, placeholder, onChange }) {
  const uniqueId = uuidv1();

  return (
    <label htmlFor={uniqueId} className={classes.label}>
      {label}
      <input
        id={uniqueId}
        className={classes.input}
        placeholder={placeholder}
        type="text"
        value={defaultValue}
        onChange={onChange}
      />
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};
