// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useSelector } from 'react-redux';

import { sharedNotes, ERROR_MESSAGES } from './sharedNoteReceiver';
import GridShared, {
  NoteText,
  Title,
  Description,
  ShareDate,
  NoSharedNotes,
  MainSharedWrapper,
} from './styled';

const SharedNotesList = () => {
  const sharedNote = useSelector(sharedNotes);
  const { noNotes } = ERROR_MESSAGES;

  return (
    <MainSharedWrapper>
      <GridShared container spacing={2}>
        {sharedNote.length ? (
          sharedNote.map((sharedItem) => (
            <Grid item xs={12}>
              <List
                sx={{ width: '100%', padding: '0px' }}
                key={`${sharedItem.id}sharelist`}
              >
                <NoteText key={`${sharedItem.id}sharebox`}>
                  <ListItem>
                    <Title variant='body2' id={sharedItem.title}>
                      {sharedItem.title}
                    </Title>
                  </ListItem>

                  <ListItem sx={{ paddingTop: '0', paddingBottom: '0' }}>
                    <Description variant='body2'>
                      {sharedItem.description}
                    </Description>
                  </ListItem>

                  <ListItem>
                    <ShareDate variant='body2'>
                      shared {sharedItem.sharedTime}
                    </ShareDate>
                  </ListItem>
                </NoteText>
              </List>
            </Grid>
          ))
        ) : (
          <Grid sharedItem xs={12}>
            <NoSharedNotes>
              <Typography component='h5' variant='h5' align='center'>
                {noNotes}
              </Typography>
            </NoSharedNotes>
          </Grid>
        )}
      </GridShared>
    </MainSharedWrapper>
  );
};

export default SharedNotesList;
