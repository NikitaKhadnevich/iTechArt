/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, Box } from '@material-ui/core';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';

import useStyles from './styled';

import WAHA_NOTES from '../../../config/constants/initNoteData';
import chooseNote from '../../../utils/ChooseNote';
import callToEditNote from '../../../utils/CallToEditNote';
import saveEditedNote from '../../../utils/SaveEditedNote';
import sliceDescription from '../../../utils/SliceDescription';
import deleteNote from '../../../utils/DeleteNote';
import ButtonEdit from '../../../components/notes/actionsButtons/ButtonEdit';
import InputChange from '../../../components/notes/InputChange';
import setToLocalStorage, {
  getToLocalStorage,
} from '../../../utils/localStorage/SetGetLocStor';

const ListNotes = ({ sentAbout }) => {
  const [noteList, setNoteList] = useState(WAHA_NOTES);
  const {
    gridNotes,
    listItemActive,
    listItem,
    noteText,
    title,
    description,
    noteActions,
  } = useStyles();

  const handleItem = (id, currentState = noteList, actionFunction) => {
    const filtredNotes = actionFunction(id, currentState);
    setNoteList(filtredNotes);
  };
  const handleDelete = (id, currentState = noteList) => {
    const actualNotes = deleteNote(id, currentState);
    setNoteList(actualNotes);
  };
  const handleSaveNote = (id, valueFromInput) => {
    const savedNotes = saveEditedNote(id, noteList, valueFromInput);
    setNoteList(savedNotes);
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
    <Grid container spacing={2} className={gridNotes}>
      {noteList
        ? noteList.map((item, index) => (
            <Grid item xs={12} sm={4} md={4}>
              <List
                onClick={() => handleItem(item.id, noteList, chooseNote)}
                sx={{ width: '100%', padding: '0px', cursor: 'pointer' }}
                className={item.isActive ? listItemActive : listItem}
                key={`${item.id}gridlist`}
              >
                <Box className={noteText} key={`${item.id}listbox`}>
                  <ListItem>
                    <Typography variant='h6' className={title} id={item.title}>
                      {item.title}
                    </Typography>
                  </ListItem>

                  <ListItem sx={{ paddingTop: '0', paddingBottom: '0' }}>
                    <Typography variant='body2' className={description}>
                      {sliceDescription(item.description)}
                    </Typography>
                  </ListItem>

                  <ListItem>
                    <Typography variant='subtitle2'>{item.date}</Typography>
                  </ListItem>
                </Box>
              </List>

              <Stack
                key={`${item.id}buttonStack`}
                direction='row'
                spacing={-3}
                alignItems='flex-start'
                justifyContent='flex-start'
                className={noteActions}
              >
                <Box key={`${item.id}edit`}>
                  <ButtonEdit
                    changeNote={handleItem}
                    callToEditNote={callToEditNote}
                    noteList={noteList}
                    id={item.id}
                  />
                </Box>

                <InputChange
                  key={`${item.id}input`}
                  saveEditedNote={handleSaveNote}
                  deleteNote={handleDelete}
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
  );
};

ListNotes.propTypes = {
  sentAbout: PropTypes.func,
};

ListNotes.defaultProps = {
  sentAbout: 'sentAbout',
};

export default ListNotes;
