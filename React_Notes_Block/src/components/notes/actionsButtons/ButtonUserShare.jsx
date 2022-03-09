/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import React from 'react';
import PropTypes from 'prop-types';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import {
  notesList,
  isShared,
  IS_SHARED,
  SET_NOTES_LIST,
  CallUserList,
} from '../ButtonReceiver';

const ButtonUserShare = ({ id, showUsersForShare }) => (
  <IconButton aria-label='edit' onClick={() => showUsersForShare(id)}>
    <SendIcon />
  </IconButton>
);
export default ButtonUserShare;

ButtonUserShare.propTypes = {
  id: PropTypes.number,
  showUsersForShare: PropTypes.func,
};
ButtonUserShare.defaultProps = {
  id: 'id',
  showUsersForShare: 'showUsersForShare',
};
