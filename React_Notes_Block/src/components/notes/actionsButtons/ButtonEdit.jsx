import React from 'react';
import PropTypes from 'prop-types';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import IconButton from '@mui/material/IconButton';

const ButtonEdit = ({ id, changeNote, callToEditNote, noteList }) => (
  <IconButton
    aria-label='edit'
    onClick={() => changeNote(id, noteList, callToEditNote)}
  >
    <ModeEditIcon />
  </IconButton>
);
export default ButtonEdit;

ButtonEdit.propTypes = {
  changeNote: PropTypes.func,
  callToEditNote: PropTypes.func,
  noteList: PropTypes.string,
  id: PropTypes.number,
};
ButtonEdit.defaultProps = {
  changeNote: 'changeNote',
  callToEditNote: 'callToEditNote',
  noteList: 'noteList',
  id: 'id',
};
