import React from 'react';
import PropTypes from 'prop-types';

import { NoteActions, BottonChange } from './styled';
import {
  ButtonEdit,
  ButtonShareContainer,
  InputChange,
  GetUsersContainer,
  callToEditNote,
} from './ListNotesReceiver';
import ListNoteStatus from './ListNotesGrid/ListNoteStatus';

const ListNotes = ({
  handleItem,
  handleSaveNote,
  handleDelete,
  noteList,
  noteItem,
  index,
}) => (
  <>
    <ListNoteStatus
      handleItem={handleItem}
      noteList={noteList}
      noteItem={noteItem}
    />
    <NoteActions
      key={`${noteItem.id}_buttonStack`}
      direction='row'
      spacing={-3}
      alignItems='flex-start'
      justifyContent='flex-start'
    >
      <BottonChange key={`${noteItem.id}_buttonEdit`}>
        <ButtonEdit
          handleItem={handleItem}
          callToEditNote={callToEditNote}
          noteList={noteList}
          id={noteItem.id}
        />
        <ButtonShareContainer
          key={`${noteItem.id}_buttonUserShare`}
          id={noteItem.id}
        />
      </BottonChange>
      <InputChange
        key={`${noteItem.id}_noteInput`}
        handleSaveNote={handleSaveNote}
        handleDelete={handleDelete}
        isChange={noteItem.isChange}
        description={noteItem.description}
        id={noteItem.id}
        index={index}
        currentState={noteList}
      />
    </NoteActions>
    {noteItem.isShared && <GetUsersContainer noteId={noteItem.id} />}
  </>
);
export default ListNotes;

ListNotes.propTypes = {
  handleItem: PropTypes.func,
  handleSaveNote: PropTypes.func,
  handleDelete: PropTypes.func,
  noteList: PropTypes.string,
  noteItem: PropTypes.string,
  index: PropTypes.number,
};

ListNotes.defaultProps = {
  handleItem: 'handleItem',
  handleSaveNote: 'handleSaveNote',
  handleDelete: 'handleDelete',
  noteList: 'noteList',
  noteItem: 'noteItem',
  index: 'index',
};
