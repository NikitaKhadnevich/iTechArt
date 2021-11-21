import React, { Suspense } from 'react';

import { MainSharedCont } from './styled';

import { Spiner } from './sharedNoteReceiver';
import LazyShareNotes from './LazyShareNotes';

const SharedNotesCont = () => (
  <MainSharedCont>
    <Suspense fallback={<Spiner />}>
      <LazyShareNotes />
    </Suspense>
  </MainSharedCont>
);

export default SharedNotesCont;
