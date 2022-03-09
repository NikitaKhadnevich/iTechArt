/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Box } from '@mui/material';

import GetUsers from './GetUsers';

import {
  INFO_MESSAGES,
  isShared,
  SET_USERS_LIST,
  NOTES_URL,
  USERS_URL,
  usersList,
  useQueryWrapper,
  GetUsersList,
  UpdateSharedNotes,
  useUpdateWrapper,
} from '../ButtonReceiver';
import appTheme from '../../../globalStyles';

const GetUsersContainer = ({ noteId }) => {
  const userList = useSelector(usersList);
  const sharedStatus = useSelector(isShared);
  const [userId, setUserId] = useState();
  const [sharedNote, setSharedNote] = useState();
  const dispatch = useDispatch();
  const { fetchLoading } = INFO_MESSAGES;

  const { isLoading, data, isFetching } = useQueryWrapper(
    GetUsersList,
    USERS_URL
  );

  useEffect(() => {
    if (Array.isArray(data)) {
      dispatch(SET_USERS_LIST(data));
    }
  }, [data]);

  const handleChangeUser = (e) => {
    setUserId(e.target.value);
    setSharedNote(`${NOTES_URL}/${noteId}`);
  };

  const updateSharedNotes = useUpdateWrapper(
    UpdateSharedNotes,
    `${USERS_URL}/${userId}`
  );

  const handleShare = () => {
    const [userFilter] = userList.filter((user) => user.id === Number(userId));
    updateSharedNotes.mutateAsync({
      ...userFilter,
      sharedNotes: [...userFilter.sharedNotes, sharedNote],
    });
  };

  return (
    <>
      {isLoading || isFetching ? (
        fetchLoading
      ) : (
        <Box>
          <GetUsers
            userId={userId}
            userList={userList}
            handleChangeUser={handleChangeUser}
          />
          <Button
            sx={{
              m: 1,
              background: appTheme.palette.primary.dark,
              color: appTheme.palette.secondary.main,
            }}
            disabled={!userId}
            onClick={() => handleShare()}
          >
            Share Note
          </Button>
        </Box>
      )}
    </>
  );
};

export default GetUsersContainer;

GetUsersContainer.propTypes = {
  noteId: PropTypes.number,
};

GetUsersContainer.defaultProps = {
  noteId: 'noteId',
};
