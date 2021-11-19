/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MainNoteContainer from './styled';

import {
  Spinner,
  LazyListNotes,
  LazyAboutNotes,
  GET_SHARED_POST,
  GET_UPDATE_SHARED_POST,
  sharedArr,
  WAHA_NOTES,
  chooseNote,
  callToEditNote,
  saveEditedNote,
  sliceDescription,
  deleteNote,
  setToLocalStorage,
  getToLocalStorage,
  shareHelper,
  removeShareNote,
} from './mainNotesReciever';

const MainNotes = () => {
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
    <MainNoteContainer>
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
        />
      </Suspense>
    </MainNoteContainer>
  );
};

export default MainNotes;
