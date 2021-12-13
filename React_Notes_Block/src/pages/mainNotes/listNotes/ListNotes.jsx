import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid } from '@material-ui/core';

import GridMain, { NoteActions, BottonChange, NoAddedNotes } from './styled';
import {
  ButtonEdit,
  ButtonShare,
  InputChange,
  FormikAddNote,
  ERROR_MESSAGES,
} from './ListNotesReceiver';
import ListNoteStatus from './ListNotesGrid/ListNoteStatus';

const ListNotes = ({
  handleItem,
  handleShare,
  handleSaveNote,
  handleDelete,
  chooseNote,
  sliceDescription,
  callToEditNote,
  noteList,
  setNoteList,
}) => {
  const { noAddedNotes } = ERROR_MESSAGES;
  return (
    <>
      <FormikAddNote setNoteList={setNoteList} noteList={noteList} />
      <GridMain container spacing={2}>
        {noteList ? (
          noteList.map((noteItem, index) => (
            <Grid item xs={12} sm={6} md={4}>
              <ListNoteStatus
                handleItem={handleItem}
                chooseNote={chooseNote}
                sliceDescription={sliceDescription}
                noteList={noteList}
                noteItem={noteItem}
              />
              <NoteActions
                key={`${noteItem.id}buttonStack`}
                direction='row'
                spacing={-3}
                alignItems='flex-start'
                justifyContent='flex-start'
              >
                <BottonChange key={`${noteItem.id}edit`}>
                  <ButtonEdit
                    handleItem={handleItem}
                    callToEditNote={callToEditNote}
                    noteList={noteList}
                    id={noteItem.id}
                  />
                  <ButtonShare
                    handleShare={handleShare}
                    noteList={noteList}
                    id={noteItem.id}
                  />
                </BottonChange>
                <InputChange
                  key={`${noteItem.id}input`}
                  handleSaveNote={handleSaveNote}
                  handleDelete={handleDelete}
                  isChange={noteItem.isChange}
                  description={noteItem.description}
                  id={noteItem.id}
                  index={index}
                  currentState={noteList}
                />
              </NoteActions>
            </Grid>
          ))
        ) : (
          <NoAddedNotes>
            <Typography component='h5' variant='h5' align='center'>
              {noAddedNotes}
            </Typography>
          </NoAddedNotes>
        )}
      </GridMain>
    </>
  );
};
export default ListNotes;

ListNotes.propTypes = {
  noteList: PropTypes.string,
  callToEditNote: PropTypes.func,
  sliceDescription: PropTypes.func,
  chooseNote: PropTypes.func,
  handleItem: PropTypes.func,
  handleShare: PropTypes.func,
  handleSaveNote: PropTypes.func,
  handleDelete: PropTypes.func,
  setNoteList: PropTypes.func,
};

ListNotes.defaultProps = {
  noteList: 'noteList',
  callToEditNote: 'callToEditNote',
  sliceDescription: 'sliceDescription',
  chooseNote: 'chooseNote',
  handleItem: 'handleItem',
  handleShare: 'handleShare',
  handleSaveNote: 'handleSaveNote',
  handleDelete: 'handleDelete',
  setNoteList: 'setNoteList',
};
