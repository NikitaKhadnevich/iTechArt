/* eslint-disable react/jsx-no-bind */
import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const SignUpLastName = ({
  lastName,
  touched,
  onChangeAccum,
  handleBlur,
  errors,
}) => (
  <TextField
    value={lastName}
    id='lastName'
    name='lastName'
    required
    fullWidth
    label='Last Name'
    autoComplete='given-name'
    error={touched.lastName && Boolean(errors.lastName)}
    helperText={touched.lastName && errors.lastName}
    onChange={onChangeAccum.bind(null, 'lastName')}
    onBlur={handleBlur}
  />
);
export default SignUpLastName;

SignUpLastName.propTypes = {
  lastName: PropTypes.string,
  touched: PropTypes.bool,
  onChangeAccum: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.bool,
};

SignUpLastName.defaultProps = {
  lastName: 'lastName',
  touched: 'touched',
  onChangeAccum: 'onChangeAccum',
  handleBlur: 'handleBlur',
  errors: 'errors',
};
