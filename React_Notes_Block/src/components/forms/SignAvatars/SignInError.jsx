/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const SignInError = ({ userNoExist }) => (
  <>
    <Avatar sx={{ m: 1, bgcolor: 'red' }}>
      <LockOutlinedIcon />
    </Avatar>
    <Typography component='h5' variant='h5'>
      {userNoExist}
    </Typography>
  </>
);
export default SignInError;

SignInError.propTypes = {
  userNoExist: PropTypes.string,
};

SignInError.defaultProps = {
  userNoExist: 'userNoExist',
};
