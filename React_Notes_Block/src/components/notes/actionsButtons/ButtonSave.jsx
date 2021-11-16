import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/Save';

const ButtonSave = ({ id, saveEditedNote, updateDescription }) => (
  <Stack direction='row' spacing={0.5} alignItems='center'>
    <IconButton
      id={id}
      aria-label='save'
      color='primary'
      onClick={() => saveEditedNote(id, updateDescription)}
    >
      <SaveIcon />
    </IconButton>
  </Stack>
);

ButtonSave.propTypes = {
  saveEditedNote: PropTypes.func,
  updateDescription: PropTypes.string,
  id: PropTypes.number,
};
ButtonSave.defaultProps = {
  saveEditedNote: 'saveEditedNote',
  updateDescription: 'updateDescription',
  id: 'id',
};

export default ButtonSave;
