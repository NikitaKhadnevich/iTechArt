import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { SelectSort, FormControlWrapper, InputLabelName } from './styled';
import {
  getSortNotesDate,
  getSortNotesTitle,
  SET_NOTES_LIST,
  notesList,
} from './sortNotesReceiver';

function SortNotes() {
  const noteList = useSelector(notesList);
  const dispatch = useDispatch();

  const sortDate = (asc, desc, currentNoteState) => {
    const sortDateResult = getSortNotesDate(asc, desc, currentNoteState);
    dispatch(SET_NOTES_LIST(sortDateResult));
  };

  const sortName = (asc, desc, currentNoteState) => {
    const sortDateResult = getSortNotesTitle(asc, desc, currentNoteState);
    dispatch(SET_NOTES_LIST(sortDateResult));
  };

  return (
    <Box>
      <FormControlWrapper key='noteSortWrapper'>
        <InputLabelName id='noteSort'>Sorting</InputLabelName>
        <SelectSort labelId='noteSort' id='noteSort' label='noteSort'>
          <MenuItem onClick={() => sortDate(-1, 1, noteList)}>
            Earlier Note
          </MenuItem>
          <MenuItem onClick={() => sortDate(1, -1, noteList)}>
            Later Note
          </MenuItem>
          <hr />
          <MenuItem onClick={() => sortName(1, -1, noteList)}>
            Title A&gt;Z
          </MenuItem>
          <MenuItem onClick={() => sortName(-1, 1, noteList)}>
            Title Z&gt;A
          </MenuItem>
        </SelectSort>
      </FormControlWrapper>
    </Box>
  );
}

export default SortNotes;
