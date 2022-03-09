/* eslint-disable react/no-typos */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const SignEmail = ({ email, touched, onChangeAccum, handleBlur, errors }) => (
  <TextField
    value={email}
    id='email'
    name='email'
    required
    variant='filled'
    autoFocus
    fullWidth
    label='Email Address'
    autoComplete='email'
    error={touched.email && Boolean(errors.email)}
    helperText={touched.email && errors.email}
    onChange={onChangeAccum.bind(null, 'email')}
    onBlur={handleBlur}
  />
);

export default SignEmail;

SignEmail.propTypes = {
  email: PropTypes.string,
  touched: PropTypes.bool,
  onChangeAccum: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.bool,
};

SignEmail.defaultProps = {
  email: 'email',
  touched: 'touched',
  onChangeAccum: 'onChangeAccum',
  handleBlur: 'handleBlur',
  errors: 'errors',
};
