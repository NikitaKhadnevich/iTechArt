import React from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';

const ButtonChange = (props) => {
  const { id, changeNote, callToEditNote, noteList } = props;

  return (
    <>
      <IconButton
        aria-label='edit'
        onClick={() => changeNote(id, noteList, callToEditNote)}
      >
        <ModeEditIcon />
      </IconButton>
    </>
  );
};

export default ButtonChange;

export const ButtonSaveChanges = (props) => {
  const { id, saveEditedNote, newInputState } = props;
  return (
    <>
      <Stack direction='row' spacing={0.5} alignItems='center'>
        <IconButton
          id={id}
          aria-label='save'
          color='primary'
          onClick={() => saveEditedNote(id, newInputState)}
        >
          <SaveIcon />
        </IconButton>
      </Stack>
    </>
  );
};

export const ButtonDelete = (props) => {
  const { index, deleteNotes } = props;
  return (
    <>
      <Stack direction='row' spacing={0.5} alignItems='center'>
        <IconButton
          aria-label='delete'
          color='primary'
          onClick={() => deleteNotes(index)}
        >
          <DeleteIcon />
        </IconButton>
      </Stack>
    </>
  );
};

ButtonChange.propTypes = {
  changeNote: PropTypes.func,
  callToEditNote: PropTypes.func,
  noteList: PropTypes.string,
  id: PropTypes.number,
};
ButtonChange.defaultProps = {
  changeNote: 'changeNote',
  callToEditNote: 'callToEditNote',
  noteList: 'noteList',
  id: 'id',
};

ButtonSaveChanges.propTypes = {
  saveEditedNote: PropTypes.func,
  newInputState: PropTypes.string,
  id: PropTypes.number,
};
ButtonSaveChanges.defaultProps = {
  saveEditedNote: 'saveEditedNote',
  newInputState: 'newInputState',
  id: 'id',
};

ButtonDelete.propTypes = {
  deleteNotes: PropTypes.func,
  index: PropTypes.number,
};

ButtonDelete.defaultProps = {
  deleteNotes: 'deleteNotes',
  index: 'index',
};
