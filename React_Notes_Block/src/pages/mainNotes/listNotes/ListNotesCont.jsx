/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, Box, Container } from '@material-ui/core';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';

import useStyles from './styled';

import {
  ButtonEdit,
  ButtonShare,
  InputChange,
  errorMessages,
} from './ListNotesReciever';

const ListNotes = ({
  handleItem,
  handleShare,
  handleSaveNote,
  handleDelete,
  chooseNote,
  sliceDescription,
  callToEditNote,
  noteList,
}) => {
  const {
    gridNotes,
    listItemActive,
    listItem,
    noteText,
    title,
    description,
    noteActions,
  } = useStyles();

  const { noAddedNotes } = errorMessages;

  return (
    <Grid container spacing={2} className={gridNotes}>
      {noteList.length ? (
        noteList.map((item, index) => (
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
                  handleItem={handleItem}
                  callToEditNote={callToEditNote}
                  noteList={noteList}
                  id={item.id}
                />
                <ButtonShare
                  handleShare={handleShare}
                  noteList={noteList}
                  id={item.id}
                />
              </Box>

              <InputChange
                key={`${item.id}input`}
                handleSaveNote={handleSaveNote}
                handleDelete={handleDelete}
                isChange={item.isChange}
                description={item.description}
                id={item.id}
                index={index}
                currentState={noteList}
              />
            </Stack>
          </Grid>
        ))
      ) : (
        <Container className={noAddedNotes}>
          <Typography component='h5' variant='h5' align='center'>
            {noAddedNotes}
          </Typography>
        </Container>
      )}
    </Grid>
  );
};

ListNotes.propTypes = {
  noteList: PropTypes.string,
  callToEditNote: PropTypes.func,
  sliceDescription: PropTypes.func,
  chooseNote: PropTypes.func,
  handleItem: PropTypes.func,
  handleShare: PropTypes.func,
  handleSaveNote: PropTypes.func,
  handleDelete: PropTypes.func,
};

ListNotes.defaultProps = {
  noteList: 'noteList',
  callToEditNote: 'callToEditNote',
  sliceDescription: 'sliceDescription',
  chooseNote: 'chooseNote',
  handleItem: 'handleItem',
  handleShare: 'handleShare',
  handleSaveNote: 'handleSaveNote',
  handleDelete: 'handleDelete',
};

export default ListNotes;
