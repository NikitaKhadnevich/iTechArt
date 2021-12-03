/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Grid from '@mui/material/Grid';
import { SignWrapper, SignBox, FormBox, FormGrid } from './styled';
import {
  ERROR_MESSAGES,
  Spinner,
  isSignInError,
  isSignUp,
  SignInError,
  SignInInfo,
  SignInMessage,
  SignEmail,
  SignPassword,
} from './formsReceiver';
import INFO_MESSAGES from '../../config/constants/infoMessages';

export default function SignIn({ formik, isFetching, isLoading }) {
  const signInError = useSelector(isSignInError);
  const userIsSignUp = useSelector(isSignUp);
  const {
    values: { email, password },
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
    <SignWrapper component='main'>
      {isLoading || isFetching ? (
        <Spinner />
      ) : (
        <SignBox>
          {signInError && !userIsSignUp && (
            <SignInError userNoExist={userNoExist} />
          )}
          {!signInError && !userIsSignUp && (
            <SignInInfo welcomeSignIn={welcomeSignIn} />
          )}
          {!signInError && userIsSignUp && (
            <SignInMessage authAfterSignUp={authAfterSignUp} />
          )}
          <FormBox
            component='form'
            noValidate
            sx={{ mt: 3 }}
            onSubmit={handleSubmit}
          >
            <FormGrid container spacing={2}>
              <Grid item xs={12}>
                <SignEmail
                  email={email}
                  touched={touched}
                  onChangeAccum={onChangeAccum}
                  handleBlur={handleBlur}
                  errors={errors}
                />
              </Grid>
              <Grid item xs={12}>
                <SignPassword
                  password={password}
                  touched={touched}
                  onChangeAccum={onChangeAccum}
                  handleBlur={handleBlur}
                  errors={errors}
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
    </SignWrapper>
  );
}
