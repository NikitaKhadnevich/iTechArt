/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const SignInMessage = ({ authAfterSignUp }) => (
  <>
    <Avatar sx={{ m: 1, bgcolor: 'yellow' }}>
      <LockOutlinedIcon />
    </Avatar>
    <Typography component='h5' variant='h5'>
      {authAfterSignUp}
    </Typography>
  </>
);
export default SignInMessage;

SignInMessage.propTypes = {
  authAfterSignUp: PropTypes.string,
};

SignInMessage.defaultProps = {
  authAfterSignUp: 'authAfterSignUp',
};
