import React, { useState, Suspense } from 'react';
import useStyles from './styled';

const ListNotes = React.lazy(() => import('./listNotes/ListNotes'));
const AboutNote = React.lazy(() => import('./aboutNote/AboutNote'));

const MainNotesCont = () => {
  const classes = useStyles();
  const [mainNotes, setMainNotes] = useState([]);

  const sentAbout = (state) => {
    setMainNotes(() => [...state]);
  };

  return (
    <>
      <article className={classes.mainContainer}>
        <Suspense fallback={<div className={classes.spiner}>Loading...</div>}>
          <AboutNote mainNotes={mainNotes} />
          <ListNotes sentAbout={sentAbout} />
        </Suspense>
      </article>
    </>
  );
};

export default MainNotesCont;
