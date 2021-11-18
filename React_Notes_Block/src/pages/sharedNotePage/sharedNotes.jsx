import React, { Suspense } from 'react';
import { Container } from '@material-ui/core';

import useStyles from './styled';

import { Spiner } from './sharedNoteReciever';
import LazyShareNotes from './LazyShareNotes';

const SharedNotesCont = () => {
  const classes = useStyles();

  return (
    <Container clssName={classes.mainContainer}>
      <Suspense fallback={<Spiner />}>
        <LazyShareNotes />
      </Suspense>
    </Container>
  );
};

export default SharedNotesCont;
