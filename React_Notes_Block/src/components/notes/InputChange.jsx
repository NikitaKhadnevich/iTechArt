import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { Slide } from '@material-ui/core';
import useStyles from '../../pages/mainNotes/listNotes/styled';
import { ButtonSaveChanges, ButtonDelete } from './ActionButtons';

const InputChange = ({
  isChange,
  description,
  saveEditedNote,
  id,
  deleteNotes,
  index,
  currentState,
}) => {
  const [newInputState, setNewInputState] = useState(description);
  const classes = useStyles();

  const sendNewValue = (e) => {
    // eslint-disable-next-line no-unused-expressions
    e !== newInputState && e ? setNewInputState(e) : description;
  };

  return (
    <Slide in={isChange}>
      <Box
        className={isChange ? classes.changeInputShow : classes.changeInputHide}
        style={{ marginLeft: '0px' }}
      >
        <TextField
          className={classes.textAr}
          label='Note Description'
          defaultValue={description}
          multiline
          rows={2}
          variant='standard'
          onChange={(e) => sendNewValue(e.target.value)}
        />
        <ButtonSaveChanges
          className={classes.saveChanges}
          newInputState={newInputState}
          saveEditedNote={saveEditedNote}
          id={id}
        />
        <ButtonDelete
          deleteNotes={deleteNotes}
          index={index}
          currentState={currentState}
        />
      </Box>
    </Slide>
  );
};

export default InputChange;

InputChange.propTypes = {
  isChange: PropTypes.bool,
  saveEditedNote: PropTypes.func,
  description: PropTypes.string,
  id: PropTypes.number,
  index: PropTypes.number,
  deleteNotes: PropTypes.func,
  currentState: PropTypes.string,
};

InputChange.defaultProps = {
  isChange: 'isChange',
  saveEditedNote: 'saveEditedNote',
  description: 'description',
  id: 'id',
  index: 'index',
  deleteNotes: 'deleteNotes',
  currentState: 'currentState',
};
