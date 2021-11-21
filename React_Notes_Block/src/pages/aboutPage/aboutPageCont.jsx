import React, { Suspense } from 'react';

import MainContainer from './styled';

import { Spiner } from './aboutReceiver';
import LazyAboutPage from './LazyAboutPage';

const AboutPageCont = () => (
  <MainContainer>
    <Suspense fallback={<Spiner />}>
      <LazyAboutPage />
    </Suspense>
  </MainContainer>
);

export default AboutPageCont;
