/* eslint-disable camelcase */
import { Container, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styled';
import errorMessages from '../../config/constants/errorMessages';

const Visit404 = () => {
  const classes = useStyles();
  const { visit404 } = errorMessages;

  return (
    <Container className={classes.visit404}>
      <Typography component='h3' variant='h3' align='center'>
        {visit404}
      </Typography>
    </Container>
  );
};

export default Visit404;
