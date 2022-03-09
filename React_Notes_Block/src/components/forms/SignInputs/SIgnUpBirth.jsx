/* eslint-disable react/jsx-no-bind */
import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const MIN_LENGTH_BIRTH = 6;
const SignUpBirth = ({
  birthday,
  touched,
  onChangeAccum,
  handleBlur,
  errors,
}) => (
  <TextField
    value={birthday}
    id='birthday'
    name='birthday'
    required
    fullWidth
    label='Date of Birth (yyyy.mm.dd)'
    error={touched.birthday && Boolean(errors.birthday)}
    helperText={
      touched.birthday && birthday.length > MIN_LENGTH_BIRTH && errors.birthday
    }
    onChange={onChangeAccum.bind(null, 'birthday')}
    onBlur={handleBlur}
  />
);
export default SignUpBirth;

SignUpBirth.propTypes = {
  birthday: PropTypes.string,
  touched: PropTypes.bool,
  onChangeAccum: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.string,
};

SignUpBirth.defaultProps = {
  birthday: 'birthday',
  touched: 'touched',
  onChangeAccum: 'onChangeAccum',
  handleBlur: 'handleBlur',
  errors: 'errors',
};
