/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MainNoteContainer from './styled';

import {
  ListWrapper,
  AboutNoteContainer,
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
  NOTES_LIST,
} from './mainNotesReceiver';

const MainNotesContainer = () => {
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

  const sentAbout = (state) => {
    setMainNotes(state);
  };

  useEffect(() => {
    const localNote = getToLocalStorage(NOTES_LIST);
    if (localNote) {
      setNoteList(localNote);
    }
  }, []);

  useEffect(() => {
    sentAbout(noteList);
    !noteList.length
      ? setToLocalStorage(WAHA_NOTES, NOTES_LIST)
      : setToLocalStorage(noteList, NOTES_LIST);
  }, [noteList]);

  return (
    <MainNoteContainer>
      <AboutNoteContainer mainNotes={mainNotes} />
      <ListWrapper
        handleItem={handleItem}
        handleShare={handleShare}
        handleSaveNote={handleSaveNote}
        handleDelete={handleDelete}
        chooseNote={chooseNote}
        sliceDescription={sliceDescription}
        callToEditNote={callToEditNote}
        noteList={noteList}
      />
    </MainNoteContainer>
  );
};

export default MainNotesContainer;
