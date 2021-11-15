/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, Box } from '@material-ui/core';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import WAHA_NOTES, { SHORT_DESC } from '../../../config/constants/initNoteData';
import useStyles from './styled';
import chooseNote from '../../../utils/ChooseNote';
import callToEditNote from '../../../utils/CallToEditNote';
import saveEditedNote from '../../../utils/SaveEditedNote';
import deleteNote from '../../../utils/DeleteNote';
import ButtonChange from '../../../components/notes/ActionButtons';
import InputChange from '../../../components/notes/InputChange';
import setToLocalStorage, {
  getToLocalStorage,
} from '../../../utils/localStorage/SetGetLocStor';

const ListNotes = ({ sentAbout }) => {
  const [noteList, setNoteList] = useState(WAHA_NOTES);
  const classes = useStyles();

  const handleItem = (id, currentState = noteList, actionFunction) => {
    const filtredNotes = actionFunction(id, currentState);
    setNoteList(() => [...filtredNotes]);
  };
  const handleDelete = (id, currentState = noteList) => {
    const actualNotes = deleteNote(id, currentState);
    setNoteList(() => [...actualNotes]);
  };
  const handleSaveNote = (id, valueFromInput) => {
    const savedNotes = saveEditedNote(id, noteList, valueFromInput);
    setNoteList(() => [...savedNotes]);
  };

  useEffect(() => {
    const localNote = getToLocalStorage();
    if (localNote) {
      setNoteList(localNote);
    }
  }, []);
  useEffect(() => {
    sentAbout(noteList);
    !noteList.length
      ? setToLocalStorage(WAHA_NOTES)
      : setToLocalStorage(noteList);
  }, [noteList]);
  return (
    <>
      <Grid container spacing={2} className={classes.gridNotes}>
        {noteList
          ? noteList.map((item, index) => (
              <Grid item xs={12} sm={4} md={4}>
                <List
                  onClick={() => handleItem(item.id, noteList, chooseNote)}
                  sx={{ width: '100%', padding: '0px', cursor: 'pointer' }}
                  className={
                    item.isActive ? classes.listItemActive : classes.listItem
                  }
                  key={item.id}
                >
                  <Box className={classes.noteText} key={Math.random()}>
                    <ListItem>
                      <Typography
                        variant='h6'
                        className={classes.title}
                        id={item.title}
                      >
                        {item.title}
                      </Typography>
                    </ListItem>

                    <ListItem sx={{ paddingTop: '0', paddingBottom: '0' }}>
                      <Typography
                        variant='body2'
                        className={classes.description}
                      >
                        {item.description.slice(0, SHORT_DESC.limit)}
                        {SHORT_DESC.after}
                      </Typography>
                    </ListItem>

                    <ListItem>
                      <Typography variant='subtitle2'>{item.date}</Typography>
                    </ListItem>
                  </Box>
                </List>

                <Stack
                  key={Math.random()}
                  direction='row'
                  spacing={-3}
                  alignItems='flex-start'
                  justifyContent='flex-start'
                  className={classes.noteActions}
                >
                  <Box key={Math.random()}>
                    <ButtonChange
                      changeNote={handleItem}
                      callToEditNote={callToEditNote}
                      noteList={noteList}
                      id={item.id}
                    />
                  </Box>

                  <InputChange
                    key={Math.random()}
                    saveEditedNote={handleSaveNote}
                    deleteNotes={handleDelete}
                    isChange={item.isChange}
                    description={item.description}
                    id={item.id}
                    index={index}
                    currentState={noteList}
                  />
                </Stack>
              </Grid>
            ))
          : null}
      </Grid>
    </>
  );
};

ListNotes.propTypes = {
  sentAbout: PropTypes.func,
};

ListNotes.defaultProps = {
  sentAbout: 'sentAbout',
};

export default ListNotes;
