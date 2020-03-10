import React from 'react';
import classes from './Error.module.scss';

export default function Error({ message }) {
  return <div className={classes.Error}>{message}</div>;
}
