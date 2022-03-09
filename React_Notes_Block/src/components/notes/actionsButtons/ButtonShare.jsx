/* eslint-disable import/no-cycle */
import React from 'react';
import PropTypes from 'prop-types';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import { useSelector } from 'react-redux';
import { notesList } from '../ButtonReceiver';

const ButtonShare = ({ id, handleShare }) => {
  const noteList = useSelector(notesList);
  return (
    <IconButton aria-label='edit' onClick={() => handleShare(id, noteList)}>
      <SendIcon />
    </IconButton>
  );
};
export default ButtonShare;

ButtonShare.propTypes = {
  id: PropTypes.number,
  handleShare: PropTypes.func,
};
ButtonShare.defaultProps = {
  id: 'id',
  handleShare: 'handleShare',
};
