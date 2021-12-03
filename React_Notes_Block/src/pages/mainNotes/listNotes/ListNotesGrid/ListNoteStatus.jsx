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

const ListNoteStatus = ({
  handleItem,
  chooseNote,
  sliceDescription,
  noteList,
  noteItem,
}) => (
  <>
    {noteItem.isActive ? (
      <ListActive
        onClick={() => handleItem(noteItem.id, noteList, chooseNote)}
        sx={{ width: '100%', padding: '0px', cursor: 'pointer' }}
        key={`${noteItem.id}gridlist`}
      >
        <NoteText key={`${noteItem.id}listbox`}>
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
        <NoteText key={`${noteItem.id}listboxNoActive`}>
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
  sliceDescription: PropTypes.func,
  chooseNote: PropTypes.func,
  handleItem: PropTypes.func,
};

ListNoteStatus.defaultProps = {
  noteList: 'noteList',
  noteItem: 'noteItem',
  sliceDescription: 'sliceDescription',
  chooseNote: 'chooseNote',
  handleItem: 'handleItem',
};
