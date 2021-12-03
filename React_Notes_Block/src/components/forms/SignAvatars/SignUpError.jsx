/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const SignUpError = ({ hasAlready }) => (
  <>
    <Avatar sx={{ m: 1, bgcolor: 'red' }}>
      <LockOutlinedIcon />
    </Avatar>
    <Typography component='h5' variant='h5'>
      {hasAlready}
    </Typography>
  </>
);

export default SignUpError;

SignUpError.propTypes = {
  hasAlready: PropTypes.string,
};

SignUpError.defaultProps = {
  hasAlready: 'hasAlready',
};
