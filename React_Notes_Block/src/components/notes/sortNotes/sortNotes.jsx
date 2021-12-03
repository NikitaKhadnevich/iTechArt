/* eslint-disable react/prop-types */
import React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { SelectSort, FormControlWrapper, InputLabelName } from './styled';
import { getSortNotesDate, getSortNotesTitle } from './sortNotesReceiver';

function SortNotes({ noteList, setNoteList }) {
  return (
    <Box>
      <FormControlWrapper>
        <InputLabelName id='noteSort'>Sorting</InputLabelName>
        <SelectSort labelId='noteSort' id='noteSort' label='noteSort'>
          <MenuItem
            onClick={() => getSortNotesDate(-1, 1, noteList, setNoteList)}
          >
            Earlier Note
          </MenuItem>
          <MenuItem
            onClick={() => getSortNotesDate(1, -1, noteList, setNoteList)}
          >
            Later Note
          </MenuItem>
          <hr />
          <MenuItem
            onClick={() => getSortNotesTitle(1, -1, noteList, setNoteList)}
          >
            Title A&gt;Z
          </MenuItem>
          <MenuItem
            onClick={() => getSortNotesTitle(-1, 1, noteList, setNoteList)}
          >
            Title Z&gt;A
          </MenuItem>
        </SelectSort>
      </FormControlWrapper>
    </Box>
  );
}

export default SortNotes;
