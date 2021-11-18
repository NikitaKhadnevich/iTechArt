import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Zoom } from '@material-ui/core';

import useStyles from './styled';

import { ButtonSave, ButtonDelete } from './ButtonReciever';

const InputChange = ({
  isChange,
  description,
  handleSaveNote,
  id,
  handleDelete,
  index,
  currentState,
}) => {
  const [updateDescription, setDescription] = useState(description);
  const { changeInputShow, changeInputHide, textAr } = useStyles();

  const sendDescription = (e) => {
    // eslint-disable-next-line no-unused-expressions
    e !== updateDescription && e ? setDescription(e) : description;
  };

  return (
    <Zoom in={isChange}>
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
        <Box>
          <ButtonSave
            updateDescription={updateDescription}
            handleSaveNote={handleSaveNote}
            id={id}
          />
          <ButtonDelete
            handleDelete={handleDelete}
            index={index}
            id={id}
            currentState={currentState}
          />
        </Box>
      </Box>
    </Zoom>
  );
};

export default InputChange;

InputChange.propTypes = {
  isChange: PropTypes.bool,
  handleSaveNote: PropTypes.func,
  description: PropTypes.string,
  id: PropTypes.number,
  index: PropTypes.number,
  handleDelete: PropTypes.func,
  currentState: PropTypes.string,
};

InputChange.defaultProps = {
  isChange: 'isChange',
  handleSaveNote: 'handleSaveNote',
  description: 'description',
  id: 'id',
  index: 'index',
  handleDelete: 'handleDelete',
  currentState: 'currentState',
};
