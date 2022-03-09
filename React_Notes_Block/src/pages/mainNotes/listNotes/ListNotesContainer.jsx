/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Grid, Box } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ListNotes from './ListNotes';

import GridMain from './styled';
import {
  FormikAddNote,
  ERROR_MESSAGES,
  notesList,
  NotesStatus,
  NotesFetching,
  SET_NOTES_LIST,
} from './ListNotesReceiver';

const ListNotesContainer = ({
  handleItem,
  handleSaveNote,
  handleDelete,
  fetchNextPage,
  isFetching,
}) => {
  const { noAddedNotes } = ERROR_MESSAGES;
  const noteList = useSelector(notesList);
  const dispatch = useDispatch();
  const [triggerElem, setElement] = useState(null);
  const observConditions = new IntersectionObserver(
    (entries) => {
      entries[0].isIntersecting && fetchNextPage();
    },
    { threshold: 1 }
  );
  const observer = useRef(observConditions);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const spredNotes = [...noteList];
    const dndNote = Array.from(spredNotes);
    const [reorderedItem] = dndNote.splice(result.source.index, 1);
    dndNote.splice(result.destination.index, 0, reorderedItem);
    dndNote && dispatch(SET_NOTES_LIST(dndNote));
  };

  useEffect(() => {
    triggerElem && observer.current.observe(triggerElem);
    return () => {
      if (triggerElem) {
        observer.current.unobserve(triggerElem);
      }
    };
  }, [triggerElem]);

  return (
    <>
      <FormikAddNote />
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='noteList'>
          {(provided) => (
            <GridMain
              className='noteList'
              container
              spacing={2}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {noteList ? (
                noteList.map((noteItem, index) => (
                  <Draggable
                    key={noteItem.id}
                    draggableId={noteItem.id}
                    index={index}
                  >
                    {(provided) => (
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ListNotes
                          handleItem={handleItem}
                          handleSaveNote={handleSaveNote}
                          handleDelete={handleDelete}
                          fetchNextPage={fetchNextPage}
                          isFetching={isFetching}
                          noteList={noteList}
                          index={index}
                          noteItem={noteItem}
                        />
                      </Grid>
                    )}
                  </Draggable>
                ))
              ) : (
                <NotesStatus noAddedNotes={noAddedNotes} />
              )}
              {provided.placeholder}
            </GridMain>
          )}
        </Droppable>
      </DragDropContext>
      <Box ref={setElement}>
        <NotesFetching isFetching={isFetching} />
      </Box>
    </>
  );
};
export default ListNotesContainer;

ListNotesContainer.propTypes = {
  fetchNextPage: PropTypes.func,
  handleItem: PropTypes.func,
  handleSaveNote: PropTypes.func,
  handleDelete: PropTypes.func,
  isFetching: PropTypes.bool,
};

ListNotesContainer.defaultProps = {
  fetchNextPage: 'fetchNextPage',
  handleItem: 'handleItem',
  handleSaveNote: 'handleSaveNote',
  handleDelete: 'handleDelete',
  isFetching: 'isFetching',
};
