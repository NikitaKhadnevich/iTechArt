import React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import appTheme from '../../../globalStyles';

const SignUpSuccess = () => (
  <>
    <Avatar sx={{ m: 1, bgcolor: appTheme.palette.primary.dark }}>
      <LockOutlinedIcon />
    </Avatar>
    <Typography component='h5' variant='h5'>
      Sign Up
    </Typography>
  </>
);
export default SignUpSuccess;
