/* eslint-disable no-unused-vars */
import React from 'react';
import { Typography, Box } from '@material-ui/core';
import styles from './styles.scss';

const Spinner = () => (
  <Box className='center'>
    <Typography variant='h6'>Loading...</Typography>
    <Box className='loader' />
    <Box />
  </Box>
);

export default Spinner;
