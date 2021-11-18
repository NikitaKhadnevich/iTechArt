import React, { Suspense } from 'react';
import useStyles from './styled';
import Spiner from '../../components/spinner/spinner';
import LazyShareNotes from './LazyShareNotes';

const SharedNotesCont = () => {
  const classes = useStyles();

  return (
    <article className={classes.mainContainer}>
      <Suspense fallback={<Spiner />}>
        <LazyShareNotes />
      </Suspense>
    </article>
  );
};

export default SharedNotesCont;
