// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Typography, Grid, Box, Container } from '@material-ui/core';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useSelector } from 'react-redux';

import useStyles from './styled';

import { sharedArr, errorMessages } from './sharedNoteReciever';

const SharedNotes = () => {
  const sharedNote = useSelector(sharedArr);
  const {
    gridNotes,
    listItem,
    noteText,
    title,
    description,
    shareDate,
    noSharedNotes,
  } = useStyles();
  const { noNotes } = errorMessages;

  return (
    <Grid container spacing={2} className={gridNotes}>
      {sharedNote.length ? (
        sharedNote.map((item) => (
          <Grid item xs={12}>
            <List
              sx={{ width: '100%', padding: '0px' }}
              className={listItem}
              key={`${item.id}sharelist`}
            >
              <Box className={noteText} key={`${item.id}sharebox`}>
                <ListItem>
                  <Typography variant='body2' className={title} id={item.title}>
                    {item.title}
                  </Typography>
                </ListItem>

                <ListItem sx={{ paddingTop: '0', paddingBottom: '0' }}>
                  <Typography variant='body2' className={description}>
                    {item.description}
                  </Typography>
                </ListItem>

                <ListItem>
                  <Typography variant='body2' className={shareDate}>
                    shared {item.sharedTime}
                  </Typography>
                </ListItem>
              </Box>
            </List>
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <Container className={noSharedNotes}>
            <Typography component='h5' variant='h5' align='center'>
              {noNotes}
            </Typography>
          </Container>
        </Grid>
      )}
    </Grid>
  );
};

export default SharedNotes;
