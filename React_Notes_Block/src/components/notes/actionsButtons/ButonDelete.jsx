import React from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ButtonDelete = ({ index, deleteNote }) => (
  <Stack direction='row' spacing={0.5} alignItems='center'>
    <IconButton
      aria-label='delete'
      color='primary'
      onClick={() => deleteNote(index)}
    >
      <DeleteIcon />
    </IconButton>
  </Stack>
);

ButtonDelete.propTypes = {
  deleteNote: PropTypes.func,
  index: PropTypes.number,
};

ButtonDelete.defaultProps = {
  deleteNote: 'deleteNotes',
  index: 'index',
};

export default ButtonDelete;
