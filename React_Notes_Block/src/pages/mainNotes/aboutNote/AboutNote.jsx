import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Typography, Container } from '@material-ui/core';
import useStyles from './styled';
import { INITIALNOTE } from '../../../config/constants/initNoteData';

const AboutNote = ({ mainNotes }) => {
  const [aboutData, setAboutData] = useState();
  const { aboutWrapper } = useStyles();

  const addDescription = () => {
    const [sortDescription] = mainNotes.filter((item) => item.isActive);

    if (sortDescription) {
      setAboutData(sortDescription.description);
    } else {
      setAboutData(INITIALNOTE);
    }
  };

  useEffect(() => {
    addDescription();
  }, [mainNotes]);

  return (
    <Container className={aboutWrapper}>
      <Typography variant='body1'>{aboutData}</Typography>
    </Container>
  );
};

AboutNote.propTypes = {
  mainNotes: PropTypes.string,
};

AboutNote.defaultProps = {
  mainNotes: 'mainNotes',
};

export default AboutNote;
