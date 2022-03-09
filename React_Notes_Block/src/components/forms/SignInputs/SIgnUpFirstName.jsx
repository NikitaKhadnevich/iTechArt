/* eslint-disable react/jsx-no-bind */
import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const SignUpFirstName = ({
  firstName,
  touched,
  onChangeAccum,
  handleBlur,
  errors,
}) => (
  <TextField
    value={firstName}
    id='firstName'
    name='firstName'
    required
    variant='filled'
    autoFocus
    fullWidth
    label='First Name'
    autoComplete='firstName'
    error={touched.firstName && Boolean(errors.firstName)}
    helperText={touched.firstName && errors.firstName}
    onChange={onChangeAccum.bind(null, 'firstName')}
    onBlur={handleBlur}
  />
);

export default SignUpFirstName;

SignUpFirstName.propTypes = {
  firstName: PropTypes.string,
  touched: PropTypes.bool,
  onChangeAccum: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.bool,
};

SignUpFirstName.defaultProps = {
  firstName: 'firstName',
  touched: 'touched',
  onChangeAccum: 'onChangeAccum',
  handleBlur: 'handleBlur',
  errors: 'errors',
};
