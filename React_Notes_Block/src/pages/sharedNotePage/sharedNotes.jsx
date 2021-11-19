import React, { Suspense } from 'react';

import { MainSharedCont } from './styled';

import { Spiner } from './sharedNoteReciever';
import LazyShareNotes from './LazyShareNotes';

const SharedNotesCont = () => (
  <MainSharedCont>
    <Suspense fallback={<Spiner />}>
      <LazyShareNotes />
    </Suspense>
  </MainSharedCont>
);

export default SharedNotesCont;
