import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv1 } from 'uuid';
import classes from './Input.module.scss';

export default function Input({
  label,
  defaultValue,
  value,
  onChange,
  disabled
}) {
  const uniqueId = uuidv1();

  return (
    <label htmlFor={uniqueId} className={classes.label}>
      {label}
      <input
        id={uniqueId}
        className={classes.input}
        type="text"
        disabled={disabled}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};
