/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@mui/material';

import useStyles from './styled';

import {
  GET_SHARED_POST,
  GET_UPDATE_SHARED_POST,
} from '../../api/sharedToolkit/sharedToolkit';
import { sharedArr } from '../../api/sharedToolkit/sharedSelectors';
import WAHA_NOTES from '../../config/constants/initNoteData';
import chooseNote, { callToEditNote } from '../../utils/ChooseNote';
import saveEditedNote from '../../utils/SaveEditedNote';
import sliceDescription from '../../utils/SliceDescription';
import deleteNote from '../../utils/DeleteNote';
import setToLocalStorage, {
  getToLocalStorage,
} from '../../utils/localStorage/SetGetLocStor';
import shareHelper from '../../utils/dispatchHelper/shareHelper';
import removeShareNote from '../../utils/dispatchHelper/removeShareNote';

import Spinner from '../../components/spinner/spinner';
import LazyListNotes from './listNotes/LazyListNotes';
import LazyAboutNotes from './aboutNote/LazyAboutNotes';

const MainNotes = () => {
  const { mainContainer } = useStyles();
  const [mainNotes, setMainNotes] = useState([]);
  const [noteList, setNoteList] = useState(WAHA_NOTES);

  const dispatch = useDispatch();
  const sharedNoteArray = useSelector(sharedArr);

  const handleShare = (id, currentState = noteList) => {
    const sharedArray = shareHelper(id, currentState);
    dispatch(GET_SHARED_POST(sharedArray));
  };
  const handleItem = (id, currentState = noteList, actionFunction) => {
    const filtredNotes = actionFunction(id, currentState);
    setNoteList(filtredNotes);
  };
  const handleDelete = (index, currentState = noteList, id) => {
    const actualNotes = deleteNote(index, currentState);
    setNoteList(actualNotes);
    const actualSharedNote = removeShareNote(id, sharedNoteArray);
    dispatch(GET_UPDATE_SHARED_POST(actualSharedNote));
  };
  const handleSaveNote = (id, valueFromInput) => {
    const savedNotes = saveEditedNote(id, noteList, valueFromInput);
    setNoteList(savedNotes);

    const savedSharedNotes = saveEditedNote(
      id,
      sharedNoteArray,
      valueFromInput
    );
    dispatch(GET_UPDATE_SHARED_POST(savedSharedNotes));
  };

  useEffect(() => {
    const localNote = getToLocalStorage();
    if (localNote) {
      setNoteList(localNote);
    }
  }, []);

  const sentAbout = (state) => {
    setMainNotes(state);
  };

  useEffect(() => {
    sentAbout(noteList);
    !noteList.length
      ? setToLocalStorage(WAHA_NOTES)
      : setToLocalStorage(noteList);
  }, [noteList]);

  return (
    <Container className={mainContainer}>
      <Suspense fallback={<Spinner />}>
        <LazyAboutNotes mainNotes={mainNotes} />
        <LazyListNotes
          handleItem={handleItem}
          handleShare={handleShare}
          handleSaveNote={handleSaveNote}
          handleDelete={handleDelete}
          chooseNote={chooseNote}
          sliceDescription={sliceDescription}
          callToEditNote={callToEditNote}
          noteList={noteList}
          saveEditedNote={saveEditedNote}
          deleteNote={deleteNote}
        />
      </Suspense>
    </Container>
  );
};

export default MainNotes;
