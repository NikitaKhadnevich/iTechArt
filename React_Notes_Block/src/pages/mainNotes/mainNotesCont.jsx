import React, { useState, Suspense } from 'react';
import { Container } from '@mui/material';
import useStyles from './styled';
import Spinner from '../../components/spinner/spinner';
import LazyListNotes from './listNotes/LazyListNotes';
import LazyAboutNotes from './aboutNote/LazyAboutNotes';

const MainNotesCont = () => {
  const { mainContainer } = useStyles();
  const [mainNotes, setMainNotes] = useState([]);

  const sentAbout = (state) => {
    setMainNotes(state);
  };

  return (
    <Container className={mainContainer}>
      <Suspense
        fallback={
          <div>
            <Spinner />
          </div>
        }
      >
        <LazyAboutNotes mainNotes={mainNotes} />
        <LazyListNotes sentAbout={sentAbout} />
      </Suspense>
    </Container>
  );
};

export default MainNotesCont;
