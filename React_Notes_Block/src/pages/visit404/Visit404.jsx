/* eslint-disable camelcase */
import { Container, Typography } from '@material-ui/core';
import React from 'react';

import useStyles from './styled';

import { errorMessages } from './visitReciever';

const Visit404 = () => {
  const classes = useStyles();
  const { visit404 } = errorMessages;

  return (
    <Container className={classes.visit404}>
      <Typography component='h5' variant='h5' align='center'>
        {visit404}
      </Typography>
    </Container>
  );
};

export default Visit404;
