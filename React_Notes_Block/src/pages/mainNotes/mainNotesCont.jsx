import React, { useState, Suspense } from 'react';
import { Container } from '@mui/material';
import useStyles from './styled';
import LazyListNotes from './listNotes/LazyListNotes';
import LazyAboutNotes from './aboutNote/LazyAboutNotes';

const MainNotesCont = () => {
  const { mainContainer, spiner } = useStyles();
  const [mainNotes, setMainNotes] = useState([]);

  const sentAbout = (state) => {
    setMainNotes(state);
  };

  return (
    <Container className={mainContainer}>
      <Suspense fallback={<div className={spiner}>Loading...</div>}>
        <LazyAboutNotes mainNotes={mainNotes} />
        <LazyListNotes sentAbout={sentAbout} />
      </Suspense>
    </Container>
  );
};

export default MainNotesCont;
