import React from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ButtonDelete = ({ index, handleDelete, id, currentState }) => (
  <Stack direction='row' spacing={0.5} alignItems='center'>
    <IconButton
      aria-label='delete'
      color='primary'
      onClick={() => handleDelete(index, currentState, id)}
    >
      <DeleteIcon />
    </IconButton>
  </Stack>
);

ButtonDelete.propTypes = {
  handleDelete: PropTypes.func,
  index: PropTypes.number,
  id: PropTypes.number,
  currentState: PropTypes.string,
};

ButtonDelete.defaultProps = {
  handleDelete: 'handleDelete',
  index: 'index',
  id: 'id',
  currentState: 'currentState',
};

export default ButtonDelete;
