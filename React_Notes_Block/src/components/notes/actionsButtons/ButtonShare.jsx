import React from 'react';
import PropTypes from 'prop-types';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';

const ButtonShare = ({ id, noteList, shareNote }) => (
  <IconButton aria-label='edit' onClick={() => shareNote(id, noteList)}>
    <SendIcon />
  </IconButton>
);
export default ButtonShare;

ButtonShare.propTypes = {
  noteList: PropTypes.string,
  id: PropTypes.number,
  shareNote: PropTypes.func,
};
ButtonShare.defaultProps = {
  noteList: 'noteList',
  id: 'id',
  shareNote: 'shareNote',
};
