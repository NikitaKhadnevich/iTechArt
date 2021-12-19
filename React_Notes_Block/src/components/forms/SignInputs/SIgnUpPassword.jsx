/* eslint-disable react/jsx-no-bind */
import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const SignPassword = ({
  password,
  touched,
  onChangeAccum,
  handleBlur,
  errors,
}) => (
  <TextField
    value={password}
    id='password'
    name='password'
    required
    fullWidth
    label='Password'
    type='password'
    autoComplete='new-password'
    error={touched.password && Boolean(errors.password)}
    helperText={touched.password && errors.password}
    onChange={onChangeAccum.bind(null, 'password')}
    onBlur={handleBlur}
  />
);
export default SignPassword;

SignPassword.propTypes = {
  password: PropTypes.string,
  touched: PropTypes.bool,
  onChangeAccum: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.bool,
};

SignPassword.defaultProps = {
  password: 'password',
  touched: 'touched',
  onChangeAccum: 'onChangeAccum',
  handleBlur: 'handleBlur',
  errors: 'errors',
};
