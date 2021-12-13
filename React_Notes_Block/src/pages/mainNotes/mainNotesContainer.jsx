/* eslint-disable no-unused-expressions */
/* eslint-disable no-return-assign */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery, useMutation } from 'react-query';
import MainNoteWrapper from './styled';

import {
  Spinner,
  ListWrapper,
  AboutNoteContainer,
  GET_SHARED_POST,
  GET_UPDATE_SHARED_POST,
  sharedNotes,
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
  notesURL,
  ERROR_MESSAGES,
  runGETusers,
  runUpdateUser,
  runDELETEuser,
} from './mainNotesReceiver';

const MainNotesContainer = () => {
  const dispatch = useDispatch();
  const sharedNoteArray = useSelector(sharedNotes);
  const [fetchState, setFetchState] = useState(true);
  const [urlForPut, setUrlForPut] = useState('');
  const [noteList, setNoteList] = useState();

  const { isLoading, error, data, isFetching } = useQuery(
    'GetNotes',
    () => runGETusers(notesURL, setFetchState),
    { enabled: fetchState },
    { refetchOnWindowFocus: false }
  );

  useEffect(() => {
    if (data) {
      setNoteList(data);
    } else {
      const localNote = getToLocalStorage(NOTES_LIST);
      if (localNote && !!data === false) {
        setNoteList(localNote);
      }
    }
  }, [data]);

  useEffect(() => {
    noteList && setToLocalStorage(noteList, NOTES_LIST);
  }, [noteList]);

  const deleteMutatuion = useMutation('DeleteNote', (id) =>
    runDELETEuser(notesURL, id)
  );
  const updateMutation = useMutation('UpdateNote', (updateUser) =>
    runUpdateUser(urlForPut, updateUser)
  );

  const handleShare = (id, currentState = noteList) => {
    const sharedNotesay = shareHelper(id, currentState);
    dispatch(GET_SHARED_POST(sharedNotesay));
  };
  const handleItem = (id, currentState = noteList, actionFunction) => {
    const filtredNotes = actionFunction(id, currentState);
    setNoteList(filtredNotes);
    setUrlForPut(`${notesURL}/${id}`);
  };
  const handleDelete = (index, currentState = noteList, id) => {
    const actualNotes = deleteNote(index, currentState);
    setNoteList(actualNotes);
    const actualSharedNote = removeShareNote(id, sharedNoteArray);
    dispatch(GET_UPDATE_SHARED_POST(actualSharedNote));
    deleteMutatuion.mutateAsync(id);
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
    const [filtredForPut] = savedNotes.filter((elem) => elem.id === id);
    updateMutation.mutateAsync(filtredForPut);
  };

  return (
    <MainNoteWrapper>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <AboutNoteContainer noteList={noteList} />
          <ListWrapper
            handleItem={handleItem}
            handleShare={handleShare}
            handleSaveNote={handleSaveNote}
            handleDelete={handleDelete}
            chooseNote={chooseNote}
            sliceDescription={sliceDescription}
            callToEditNote={callToEditNote}
            noteList={noteList}
            setNoteList={setNoteList}
          />
        </>
      )}
    </MainNoteWrapper>
  );
};
export default MainNotesContainer;
