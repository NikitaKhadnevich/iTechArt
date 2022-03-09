/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainNoteWrapper from './styled';

import {
  removeDuplicates,
  Spinner,
  ListWrapper,
  AboutNoteContainer,
  GET_SHARED_POST,
  GET_UPDATE_SHARED_POST,
  sharedNotes,
  saveEditedNote,
  deleteNote,
  setToLocalStorage,
  getToLocalStorage,
  removeShareNote,
  NOTES_LIST,
  NOTES_URL,
  PAGE_STEP,
  INFINITY_COUNTER,
  SET_NOTES_LIST,
  notesList,
  isSignIn,
  useInfinityWrapper,
  useDeleteWrapper,
  InfiniteNotes,
  DeleteNote,
  SET_INFINITY_PART,
  UpdateNote,
  useUpdateWrapper,
  pageLimit,
  SET_PAGE_LIMIT,
} from './mainNotesReceiver';

const MainNotesContainer = () => {
  const dispatch = useDispatch();
  const sharedNoteArray = useSelector(sharedNotes);
  const isUserAuth = useSelector(isSignIn);
  const PAGE_LIMIT = useSelector(pageLimit);
  const [urlForPut, setUrlForPut] = useState('');
  const noteList = useSelector(notesList);

  const { isLoading, isError, data, fetchNextPage, isFetching } =
    useInfinityWrapper(InfiniteNotes, PAGE_LIMIT, PAGE_STEP, isUserAuth);

  useEffect(() => {
    noteList && setToLocalStorage(noteList, NOTES_LIST);
  }, [noteList]);

  const pagesLength = data?.pages.length;
  useEffect(() => {
    let infinityReceiver = [];
    if (data) {
      data.pages.map((item) => (infinityReceiver = item.data));
      if (noteList.length < PAGE_STEP) {
        dispatch(SET_NOTES_LIST([...infinityReceiver]));
      }
      if (noteList.length >= PAGE_STEP) {
        const newArray = [...noteList, ...infinityReceiver];
        const clearData = removeDuplicates(newArray, 'id');
        dispatch(SET_NOTES_LIST([...clearData]));
      }
      if (
        infinityReceiver.length === INFINITY_COUNTER &&
        pagesLength === PAGE_LIMIT
      ) {
        dispatch(SET_PAGE_LIMIT(PAGE_LIMIT + PAGE_STEP));
      }
      dispatch(SET_INFINITY_PART(infinityReceiver.length));
    }

    if (!data && isError) {
      const localNote = getToLocalStorage(NOTES_LIST);
      if (localNote && !data) {
        dispatch(SET_NOTES_LIST(localNote));
      }
    }
  }, [data]);

  const deleteMutatuion = useDeleteWrapper(DeleteNote, NOTES_URL);
  const updateMutation = useUpdateWrapper(UpdateNote, urlForPut);

  const handleItem = (id, currentState = noteList, actionFunction) => {
    const filtredNotes = actionFunction(id, noteList);
    dispatch(SET_NOTES_LIST(filtredNotes));
    setUrlForPut(`${NOTES_URL}/${id}`);
  };
  const handleDelete = (index, id) => {
    const actualNotes = deleteNote(index, noteList);
    dispatch(SET_NOTES_LIST(actualNotes));
    dispatch(GET_SHARED_POST(actualNotes));
    const actualSharedNote = removeShareNote(id, sharedNoteArray);
    dispatch(GET_UPDATE_SHARED_POST(actualSharedNote));
    deleteMutatuion.mutateAsync(id);
  };
  const handleSaveNote = (id, valueFromInput) => {
    const savedNotes = saveEditedNote(id, noteList, valueFromInput);
    dispatch(SET_NOTES_LIST(savedNotes));
    dispatch(GET_SHARED_POST(savedNotes));
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
            handleSaveNote={handleSaveNote}
            handleDelete={handleDelete}
            fetchNextPage={fetchNextPage}
            isFetching={isFetching}
          />
        </>
      )}
    </MainNoteWrapper>
  );
};
export default MainNotesContainer;
