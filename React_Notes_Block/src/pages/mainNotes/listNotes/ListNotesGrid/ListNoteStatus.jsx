import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import ListItem from '@mui/material/ListItem';

import {
  ListActive,
  ListNoActive,
  NoteText,
  Title,
  Description,
} from '../styled';

import { chooseNote, sliceDescription } from '../ListNotesReceiver';

const ListNoteStatus = ({ handleItem, noteList, noteItem }) => (
  <>
    {noteItem.isActive ? (
      <ListActive
        onClick={() => handleItem(noteItem.id, noteList, chooseNote)}
        sx={{ width: '100%', padding: '0px', cursor: 'pointer' }}
        key={`${noteItem.id}_gridlist`}
      >
        <NoteText key={`${noteItem.id}_listbox`}>
          <ListItem>
            <Title variant='h6' id={noteItem.title}>
              {noteItem.title}
            </Title>
          </ListItem>
          <ListItem sx={{ paddingTop: '0', paddingBottom: '0' }}>
            <Description variant='body2'>
              {sliceDescription(noteItem.description)}
            </Description>
          </ListItem>
          <ListItem>
            <Typography
              variant='subtitle2'
              style={{ color: 'primary.main !important' }}
            >
              {noteItem.date}
            </Typography>
          </ListItem>
        </NoteText>
      </ListActive>
    ) : (
      <ListNoActive
        onClick={() => handleItem(noteItem.id, noteList, chooseNote)}
        sx={{ width: '100%', padding: '0px', cursor: 'pointer' }}
        key={`${noteItem.id}gridlistNoActive`}
      >
        <NoteText key={`${noteItem.id}_listboxNoActive`}>
          <ListItem>
            <Title variant='h6' id={noteItem.title}>
              {noteItem.title}
            </Title>
          </ListItem>
          <ListItem sx={{ paddingTop: '0', paddingBottom: '0' }}>
            <Description variant='body2'>
              {sliceDescription(noteItem.description)}
            </Description>
          </ListItem>
          <ListItem>
            <Typography variant='subtitle2'>{noteItem.date}</Typography>
          </ListItem>
        </NoteText>
      </ListNoActive>
    )}
  </>
);
export default ListNoteStatus;

ListNoteStatus.propTypes = {
  noteList: PropTypes.string,
  noteItem: PropTypes.string,
  handleItem: PropTypes.func,
};

ListNoteStatus.defaultProps = {
  noteList: 'noteList',
  noteItem: 'noteItem',
  handleItem: 'handleItem',
};
