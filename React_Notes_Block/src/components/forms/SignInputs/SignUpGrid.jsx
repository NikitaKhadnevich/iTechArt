import React from 'react';
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Button from '@material-ui/core/Button';
import Grid from '@mui/material/Grid';
import { FormGrid } from '../styled';
import {
  SignEmail,
  SignUpFirstName,
  SignUpLastName,
  SignUpBirth,
  SignPassword,
  SignUpConfirmPass,
} from '../formsReceiver';

const SignUpGrid = ({
  touched,
  onChangeAccum,
  handleBlur,
  errors,
  isValid,
  values: { email, firstName, lastName, birthday, password, confirmPassword },
}) => (
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
    <Grid item xs={12} sm={6}>
      <SignUpFirstName
        firstName={firstName}
        touched={touched}
        onChangeAccum={onChangeAccum}
        handleBlur={handleBlur}
        errors={errors}
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <SignUpLastName
        lastName={lastName}
        touched={touched}
        onChangeAccum={onChangeAccum}
        handleBlur={handleBlur}
        errors={errors}
      />
    </Grid>
    <Grid item xs={12}>
      <SignUpBirth
        birthday={birthday}
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
      <SignUpConfirmPass
        confirmPassword={confirmPassword}
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
        Sign Up
      </Button>
    </Grid>
  </FormGrid>
);

export default SignUpGrid;
