/* eslint-disable camelcase */
import { Container, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styled';

const Platform = () => {
  const classes = useStyles();

  return (
    <Container className={classes.platform}>
      <Typography>404 - Not found</Typography>
    </Container>
  );
};

export default Platform;
