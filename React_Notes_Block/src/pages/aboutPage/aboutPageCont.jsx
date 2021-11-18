import React, { Suspense } from 'react';
import { Container } from '@material-ui/core';
import useStyles from './styled';
import Spiner from '../../components/spinner/spinner';
import LazyAboutPage from './LazyListNotes';

const AboutPageCont = () => {
  const { mainContainer } = useStyles();

  return (
    <Container className={mainContainer}>
      <Suspense fallback={<Spiner />}>
        <LazyAboutPage />
      </Suspense>
    </Container>
  );
};

export default AboutPageCont;
