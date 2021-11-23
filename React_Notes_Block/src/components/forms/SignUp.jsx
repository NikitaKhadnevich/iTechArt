import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {
  SignContainer,
  SignBox,
  FormBox,
  FormGrid,
  FormButton,
} from './styled';

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      firstName: data.get('firstName'),
      password: data.get('password'),
    });
  };

  return (
    <SignContainer component='main'>
      <SignBox>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <FormBox
          component='form'
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
        >
          <FormGrid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id='email'
                name='email'
                required
                fullWidth
                label='Email Address'
                autoComplete='email'
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id='firstName'
                name='firstName'
                required
                fullWidth
                label='First Name'
                autoComplete='given-name'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id='lastName'
                name='lastName'
                required
                fullWidth
                label='Last Name'
                autoComplete='family-name'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='dateOfBirth'
                name='dateOfBirth'
                required
                fullWidth
                label='Date of Birth'
                autoComplete='new-password'
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
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id='comfirmPassword'
                name='password'
                required
                fullWidth
                label='Comfirm Password'
                type='password'
                autoComplete='new-password'
              />
            </Grid>
          </FormGrid>
          <FormButton type='submit' variant='contained' sx={{ mt: 2, mb: 2 }}>
            Sign Up
          </FormButton>
        </FormBox>
      </SignBox>
    </SignContainer>
  );
}
