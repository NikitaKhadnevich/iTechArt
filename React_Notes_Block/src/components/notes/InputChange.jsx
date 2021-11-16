import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Slide } from '@material-ui/core';
import useStyles from '../../pages/mainNotes/listNotes/styled';
import ButtonSave from './actionsButtons/ButtonSave';
import ButtonDelete from './actionsButtons/ButonDelete';

const InputChange = ({
  isChange,
  description,
  saveEditedNote,
  id,
  deleteNote,
  index,
  currentState,
}) => {
  const [updateDescription, setDescription] = useState(description);
  const { changeInputShow, changeInputHide, textAr, saveChanges } = useStyles();

  const sendDescription = (e) => {
    // eslint-disable-next-line no-unused-expressions
    e !== updateDescription && e ? setDescription(e) : description;
  };

  return (
    <Slide in={isChange}>
      <Box className={isChange ? changeInputShow : changeInputHide}>
        <TextField
          className={textAr}
          label='Note Description'
          defaultValue={description}
          multiline
          rows={2}
          variant='standard'
          onChange={(e) => sendDescription(e.target.value)}
        />
        <ButtonSave
          className={saveChanges}
          updateDescription={updateDescription}
          saveEditedNote={saveEditedNote}
          id={id}
        />
        <ButtonDelete
          deleteNote={deleteNote}
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
  deleteNote: PropTypes.func,
  currentState: PropTypes.string,
};

InputChange.defaultProps = {
  isChange: 'isChange',
  saveEditedNote: 'saveEditedNote',
  description: 'description',
  id: 'id',
  index: 'index',
  deleteNote: 'deleteNote',
  currentState: 'currentState',
};
