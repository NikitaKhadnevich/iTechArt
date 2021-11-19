/* eslint-disable camelcase */
import React, { Suspense } from 'react';

import Visit404Main from './styled';

import LazyAboutPage from './LazyVisit404';
import { Spiner } from './visitReciever';

const Visit404Cont = () => (
  <Visit404Main>
    <Suspense fallback={<Spiner />}>
      <LazyAboutPage />
    </Suspense>
  </Visit404Main>
);

export default Visit404Cont;
