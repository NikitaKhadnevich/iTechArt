/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
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
import {
  SignContainer,
  SignBox,
  FormBox,
  FormGrid,
  FormButton,
} from './styled';
import {
  ERROR_MESSAGES,
  Spinner,
  isSignInError,
  isSignUp,
} from './formsReceiver';
import appTheme from '../../globalStyles';
import INFO_MESSAGES from '../../config/constants/infoMessages';

export default function SignIn({
  formik,
  hasAlready,
  isFetching,
  isLoading,
  querryData,
  setFetch,
}) {
  const signInError = useSelector(isSignInError);
  const userIsSignUp = useSelector(isSignUp);

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
  const { userNoExist } = ERROR_MESSAGES;
  const { authAfterSignUp, welcomeSignIn } = INFO_MESSAGES;

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
          {signInError && !userIsSignUp && (
            <>
              <Avatar sx={{ m: 1, bgcolor: 'red' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component='h5' variant='h5'>
                {userNoExist}
              </Typography>
            </>
          )}
          {!signInError && !userIsSignUp && (
            <>
              <Avatar sx={{ m: 1, bgcolor: appTheme.palette.primary.dark }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component='h5' variant='h5'>
                {welcomeSignIn}
              </Typography>
            </>
          )}
          {!signInError && userIsSignUp && (
            <>
              <Avatar sx={{ m: 1, bgcolor: 'yellow' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component='h5' variant='h5'>
                {authAfterSignUp}
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
                <Button
                  disabled={!isValid}
                  type='submit'
                  fullWidth
                  color='secondary'
                  variant='outlined'
                >
                  Sign In
                </Button>
              </Grid>
            </FormGrid>
          </FormBox>
        </SignBox>
      )}
    </SignContainer>
  );
}
