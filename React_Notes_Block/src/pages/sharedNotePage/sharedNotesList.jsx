// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useSelector } from 'react-redux';

import { sharedArr, ERROR_MESSAGES } from './sharedNoteReceiver';
import GridShared, {
  NoteText,
  Title,
  Description,
  ShareDate,
  NoSharedNotes,
  MainSharedCont,
} from './styled';

const SharedNotesList = () => {
  const sharedNote = useSelector(sharedArr);
  const { noNotes } = ERROR_MESSAGES;

  return (
    <MainSharedCont>
      <GridShared container spacing={2}>
        {sharedNote.length ? (
          sharedNote.map((item) => (
            <Grid item xs={12}>
              <List
                sx={{ width: '100%', padding: '0px' }}
                key={`${item.id}sharelist`}
              >
                <NoteText key={`${item.id}sharebox`}>
                  <ListItem>
                    <Title variant='body2' id={item.title}>
                      {item.title}
                    </Title>
                  </ListItem>

                  <ListItem sx={{ paddingTop: '0', paddingBottom: '0' }}>
                    <Description variant='body2'>
                      {item.description}
                    </Description>
                  </ListItem>

                  <ListItem>
                    <ShareDate variant='body2'>
                      shared {item.sharedTime}
                    </ShareDate>
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
    </MainSharedCont>
  );
};

export default SharedNotesList;
