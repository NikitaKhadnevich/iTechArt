/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import appTheme from '../../../globalStyles';

const SignInInfo = ({ welcomeSignIn }) => (
  <>
    <Avatar sx={{ m: 1, bgcolor: appTheme.palette.primary.dark }}>
      <LockOutlinedIcon />
    </Avatar>
    <Typography component='h5' variant='h5'>
      {welcomeSignIn}
    </Typography>
  </>
);
export default SignInInfo;

SignInInfo.propTypes = {
  welcomeSignIn: PropTypes.string,
};

SignInInfo.defaultProps = {
  welcomeSignIn: 'welcomeSignIn',
};
