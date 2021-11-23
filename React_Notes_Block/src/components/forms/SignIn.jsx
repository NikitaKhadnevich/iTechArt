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

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <SignContainer component='main'>
      <SignBox>
        <Avatar sx={{ m: 1, bgcolor: 'red' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign In
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
          </FormGrid>
          <FormButton type='submit' variant='contained' sx={{ mt: 2, mb: 2 }}>
            Sign Up
          </FormButton>
        </FormBox>
      </SignBox>
    </SignContainer>
  );
}
