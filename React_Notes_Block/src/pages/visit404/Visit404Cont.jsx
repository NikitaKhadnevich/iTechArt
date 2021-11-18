/* eslint-disable camelcase */
import React, { Suspense } from 'react';
import { Container } from '@material-ui/core';

import useStyles from './styled';

import LazyAboutPage from './LazyVisit404';
import { Spiner } from './visitReciever';

const Visit404Cont = () => {
  const { mainContainer } = useStyles();

  return (
    <Container className={mainContainer}>
      <Suspense fallback={<Spiner />}>
        <LazyAboutPage />
      </Suspense>
    </Container>
  );
};

export default Visit404Cont;
