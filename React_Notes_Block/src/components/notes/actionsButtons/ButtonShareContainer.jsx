/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import PropTypes from 'prop-types';
import ButtonUserShare from './ButtonUserShare';
import {
  notesList,
  isShared,
  IS_SHARED,
  SET_NOTES_LIST,
  CallUserList,
} from '../ButtonReceiver';

const ButtonShareContainer = ({ id }) => {
  const noteList = useSelector(notesList);
  const sharedStatus = useSelector(isShared);
  const dispatch = useDispatch();

  const showUsersForShare = (itemId) => {
    dispatch(IS_SHARED(!sharedStatus));
    const filtredNotes = CallUserList(itemId, noteList);
    dispatch(SET_NOTES_LIST(filtredNotes));
  };

  return <ButtonUserShare id={id} showUsersForShare={showUsersForShare} />;
};
export default ButtonShareContainer;

ButtonShareContainer.propTypes = {
  id: PropTypes.number,
};
ButtonShareContainer.defaultProps = {
  id: 'id',
};
