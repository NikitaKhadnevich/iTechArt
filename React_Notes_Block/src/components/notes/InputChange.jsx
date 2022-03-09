/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { Zoom } from '@material-ui/core';

import { ChangeInputShow, ChangeInputHide, TextAr } from './styled';
import { ButtonSave, ButtonDelete } from './ButtonReceiver';

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
  const sendDescription = (e) => {
    e !== updateDescription && e ? setDescription(e) : description;
  };

  return (
    <Zoom in={isChange}>
      {isChange ? (
        <ChangeInputShow>
          <TextAr
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
            <ButtonDelete handleDelete={handleDelete} index={index} id={id} />
          </Box>
        </ChangeInputShow>
      ) : (
        <ChangeInputHide>
          <TextAr
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
        </ChangeInputHide>
      )}
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
  currentState: PropTypes.array,
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
