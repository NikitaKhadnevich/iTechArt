/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Typography, Grid } from '@material-ui/core';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import {
  ERROR_MESSAGES,
  INFO_MESSAGES,
  USERS_URL,
  userData,
  GetUserSharedData,
  useQueryWrapper,
  useMultiQuery,
  SharedLink,
} from './sharedNoteReceiver';
import GridShared, {
  NoteText,
  Title,
  Description,
  NoSharedNotes,
  MainSharedWrapper,
} from './styled';

const SharedNotesList = () => {
  const [currentUser] = useSelector(userData);

  const [sharedURL, setSharedURL] = useState();
  const [sharedNotesList, setSharedNotes] = useState([]);
  const { noNotes } = ERROR_MESSAGES;
  const { lostNote, fetchLoading } = INFO_MESSAGES;

  const { data, isLoading, isFetching } = useQueryWrapper(
    GetUserSharedData,
    `${USERS_URL}/${currentUser.id}`
  );

  useEffect(() => {
    if (data) {
      setSharedURL(data.sharedNotes);
    }
  }, [data]);

  const multiSharedNotes = useMultiQuery(SharedLink, sharedURL);

  useEffect(() => {
    const noteReceiver = [];
    multiSharedNotes?.map((sharedNote) => noteReceiver.push(sharedNote.data));
    noteReceiver.map((particularNote, indexNote) => {
      if (particularNote && sharedNotesList.length === indexNote) {
        setSharedNotes((prev) => [...prev, particularNote]);
      }
    });
  }, [multiSharedNotes]);

  return (
    <>
      {isLoading || isFetching ? (
        fetchLoading
      ) : (
        <MainSharedWrapper key='mainSharedReceiver'>
          <GridShared container spacing={2}>
            {sharedNotesList.length ? (
              sharedNotesList.map((sharedItem) => (
                <Grid item xs={12} key={`${sharedItem.id}_gridWrap`}>
                  <List
                    sx={{ width: '100%', padding: '0px' }}
                    key={`${sharedItem.id}_sharelist`}
                  >
                    <NoteText key={`${sharedItem.id}_sharebox`}>
                      <ListItem>
                        <Title variant='body2' id={sharedItem?.title}>
                          {sharedItem?.title ? sharedItem.title : lostNote}
                        </Title>
                      </ListItem>

                      <ListItem sx={{ paddingTop: '0', paddingBottom: '0' }}>
                        <Description variant='body2'>
                          {sharedItem?.description}
                        </Description>
                      </ListItem>
                    </NoteText>
                  </List>
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <NoSharedNotes>
                  <Typography component='h5' variant='h5' align='center'>
                    {noNotes}
                  </Typography>
                </NoSharedNotes>
              </Grid>
            )}
          </GridShared>
        </MainSharedWrapper>
      )}
    </>
  );
};

export default SharedNotesList;
