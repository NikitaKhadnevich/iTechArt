import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { NotesStat } from '../styled';
import { ScrollToTop, INFO_MESSAGES } from '../inputAddNote/inputAddReceiver';

const NotesFetching = ({ isFetching }) => {
  const { fetchLoading, readAllNotes } = INFO_MESSAGES;
  return (
    <NotesStat>
      <Typography variant='body2' align='center'>
        {isFetching ? fetchLoading : readAllNotes}
      </Typography>
      <ScrollToTop />
    </NotesStat>
  );
};

export default NotesFetching;

NotesFetching.propTypes = {
  isFetching: PropTypes.string,
};

NotesFetching.defaultProps = {
  isFetching: 'isFetching',
};
