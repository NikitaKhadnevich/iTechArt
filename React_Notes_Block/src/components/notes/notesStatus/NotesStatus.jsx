import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { NotesStat } from '../styled';

const NotesStatus = ({ noAddedNotes }) => (
  <NotesStat>
    <Typography component='h5' variant='h5' align='center'>
      {noAddedNotes}
    </Typography>
  </NotesStat>
);

export default NotesStatus;

NotesStatus.propTypes = {
  noAddedNotes: PropTypes.string,
};

NotesStatus.defaultProps = {
  noAddedNotes: 'noAddedNotes',
};
