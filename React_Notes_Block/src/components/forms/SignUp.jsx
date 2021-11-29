/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Container } from '@material-ui/core';
import { SignContainer, SignBox, FormBox, FormGrid } from './styled';
import { isSignUpError, Spinner } from './formsReceiver';
import appTheme from '../../globalStyles';

export default function SignUp({
  formik,
  hasAlready,
  isFetching,
  isLoading,
  querryData,
  setFetch,
}) {
  const signUpError = useSelector(isSignUpError);
  const {
    values: { email, firstName, lastName, birthday, password, confirmPassword },
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched,
    handleBlur,
    handleSubmit,
  } = formik;

  const onChangeAccum = (name, e) => {
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  return (
    <SignContainer component='main'>
      {isLoading || isFetching ? (
        <Spinner />
      ) : (
        <SignBox>
          {signUpError ? (
            <>
              <Avatar sx={{ m: 1, bgcolor: 'red' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component='h5' variant='h5'>
                {hasAlready}
              </Typography>
            </>
          ) : (
            <>
              <Avatar sx={{ m: 1, bgcolor: appTheme.palette.primary.dark }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component='h5' variant='h5'>
                Sign Up
              </Typography>
            </>
          )}

          <FormBox
            component='form'
            noValidate
            sx={{ mt: 3 }}
            onSubmit={handleSubmit}
          >
            <FormGrid container spacing={2}>
              <Grid item xs={12}>
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
                  helperText={touched.email ? errors.email : ''}
                  onChange={onChangeAccum.bind(null, 'email')}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={firstName}
                  id='firstName'
                  name='firstName'
                  required
                  fullWidth
                  label='First Name'
                  autoComplete='given-name'
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName ? errors.firstName : ''}
                  onChange={onChangeAccum.bind(null, 'firstName')}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={lastName}
                  id='lastName'
                  name='lastName'
                  required
                  fullWidth
                  label='Last Name'
                  autoComplete='given-name'
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName ? errors.lastName : ''}
                  onChange={onChangeAccum.bind(null, 'lastName')}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={birthday}
                  id='birthday'
                  name='birthday'
                  required
                  fullWidth
                  label='Date of Birth (yyyy.mm.dd)'
                  error={touched.birthday && Boolean(errors.birthday)}
                  helperText={
                    touched.birthday && birthday.length > 6
                      ? errors.birthday
                      : ''
                  }
                  onChange={onChangeAccum.bind(null, 'birthday')}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id='password'
                  name='password'
                  required
                  fullWidth
                  label='Password'
                  type='password'
                  autoComplete='new-password'
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password ? errors.password : ''}
                  onChange={onChangeAccum.bind(null, 'password')}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id='confirmPassword'
                  name='confirmPassword'
                  required
                  fullWidth
                  label='Confirm Password'
                  type='password'
                  error={
                    touched.confirmPassword && Boolean(errors.confirmPassword)
                  }
                  helperText={
                    touched.confirmPassword ? errors.confirmPassword : ''
                  }
                  onChange={onChangeAccum.bind(null, 'confirmPassword')}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  disabled={!isValid}
                  type='submit'
                  fullWidth
                  color='secondary'
                  variant='outlined'
                >
                  Sign Up
                </Button>
              </Grid>
            </FormGrid>
          </FormBox>
        </SignBox>
      )}
    </SignContainer>
  );
}

SignUp.propTypes = {
  email: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  birthday: PropTypes.string,
  password: PropTypes.string,
  confirmPassword: PropTypes.string,
  hasAlready: PropTypes.string,
  setFetch: PropTypes.func,
  isLoading: PropTypes.bool,
  isFetching: PropTypes.bool,
  querryData: PropTypes.string,
};

SignUp.defaultProps = {
  email: 'email',
  firstName: 'firstName',
  lastName: 'lastName',
  birthday: 'birthday',
  password: 'password',
  confirmPassword: 'confirmPassword',
  hasAlready: 'hasAlready',
  setFetch: 'setFetch',
  isLoading: 'isLoading',
  isFetching: 'isFetching',
  querryData: 'querryData',
};
