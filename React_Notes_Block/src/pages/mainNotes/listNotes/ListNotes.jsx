/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, Box } from '@material-ui/core';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styled';

import {
  GET_SHARED_POST,
  GET_UPDATE_SHARED_POST,
} from '../../../api/sharedToolkit/sharedToolkit';
import { sharedArr } from '../../../api/sharedToolkit/sharedSelectors';
import WAHA_NOTES from '../../../config/constants/initNoteData';
import chooseNote, { callToEditNote } from '../../../utils/ChooseNote';
import saveEditedNote from '../../../utils/SaveEditedNote';
import sliceDescription from '../../../utils/SliceDescription';
import deleteNote from '../../../utils/DeleteNote';
import ButtonEdit from '../../../components/notes/actionsButtons/ButtonEdit';
import ButtonShare from '../../../components/notes/actionsButtons/ButtonShare';
import InputChange from '../../../components/notes/InputChange';
import setToLocalStorage, {
  getToLocalStorage,
} from '../../../utils/localStorage/SetGetLocStor';
import shareHelper from '../../../utils/dispatchHelper/shareHelper';
import removeShareNote from '../../../utils/dispatchHelper/removeShareNote';

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

  const dispatch = useDispatch();
  const sharedNoteArray = useSelector(sharedArr);

  const handleShare = (id, currentState = noteList) => {
    const sharedArray = shareHelper(id, currentState);
    dispatch(GET_SHARED_POST(sharedArray));
  };

  const handleItem = (id, currentState = noteList, actionFunction) => {
    const filtredNotes = actionFunction(id, currentState);
    setNoteList(filtredNotes);
  };
  const handleDelete = (index, currentState = noteList, id) => {
    const actualNotes = deleteNote(index, currentState);
    setNoteList(actualNotes);
    const actualSharedNote = removeShareNote(id, sharedNoteArray);
    dispatch(GET_UPDATE_SHARED_POST(actualSharedNote));
  };
  const handleSaveNote = (id, valueFromInput) => {
    const savedNotes = saveEditedNote(id, noteList, valueFromInput);
    setNoteList(savedNotes);

    const savedSharedNotes = saveEditedNote(
      id,
      sharedNoteArray,
      valueFromInput
    );
    dispatch(GET_UPDATE_SHARED_POST(savedSharedNotes));
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
                  <ButtonShare
                    shareNote={handleShare}
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
