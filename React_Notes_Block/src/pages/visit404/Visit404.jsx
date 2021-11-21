/* eslint-disable camelcase */
import React from 'react';
import { Typography } from '@material-ui/core';

import { Visit404Text } from './styled';

import { ERROR_MESSAGES } from './visitReceiver';

const Visit404 = () => {
  const { visit404 } = ERROR_MESSAGES;

  return (
    <Visit404Text>
      <Typography component='h5' variant='h5' align='center'>
        {visit404}
      </Typography>
    </Visit404Text>
  );
};

export default Visit404;
