/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import {
  SignContainer,
  SignBox,
  FormBox,
  FormGrid,
  FormButton,
} from './styled';

export default function SignUp({ formik }) {
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

  function change(name, e) {
    handleChange(e);
    setFieldTouched(name, true, false);
  }

  return (
    <SignContainer component='main'>
      <SignBox>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h5' variant='h5'>
          Sign up
        </Typography>
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
                onChange={change.bind(null, 'email')}
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
                onChange={change.bind(null, 'firstName')}
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
                onChange={change.bind(null, 'lastName')}
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
                label='Date of Birth'
                error={touched.birthday && Boolean(errors.birthday)}
                helperText={touched.birthday ? errors.birthday : ''}
                onChange={change.bind(null, 'birthday')}
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
                onChange={change.bind(null, 'password')}
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
                onChange={change.bind(null, 'confirmPassword')}
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
    </SignContainer>
  );
}

SignUp.propTypes = {
  // email: PropTypes.string,
  // confirmPassword: PropTypes.string,
  // errors: PropTypes.bool,
  // touched: PropTypes.bool,
  // handleSubmit: PropTypes.func,
  // handleChange: PropTypes.func,
  // isValid: PropTypes.bool,
  // setFieldTouched: PropTypes.func,
};

SignUp.defaultProps = {
  // email: 'values',
  // confirmPassword: 'confirmPassword',
  // errors: 'errors',
  // touched: 'touched',
  // handleSubmit: 'handleSubmit',
  // handleChange: 'handleChange',
  // isValid: 'isValid',
  // setFieldTouched: 'setFieldTouched'
};
