import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.scss';

export default function Button({ children, onClick }) {
  return (
    <button type="button" className={classes.Button} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func
};
