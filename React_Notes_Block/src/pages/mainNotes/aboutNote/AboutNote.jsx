import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Typography, Container } from '@material-ui/core';
import useStyles from './styled';
import { INITIALNOTE } from '../../../config/constants/initNoteData';

const AboutNote = ({ mainNotes }) => {
  const [aboutData, setAboutData] = useState();
  const classes = useStyles();

  const addDescription = () => {
    const sortDescription = mainNotes.filter((item) => item.isActive);
    if (sortDescription.length > 0) {
      setAboutData(sortDescription[0].description);
    } else {
      setAboutData(INITIALNOTE);
    }
  };

  useEffect(() => {
    addDescription();
  }, [mainNotes]);

  return (
    <>
      <Container className={classes.aboutWrapper}>
        <Typography variant='body1'>{aboutData}</Typography>
      </Container>
    </>
  );
};

AboutNote.propTypes = {
  mainNotes: PropTypes.string,
};

AboutNote.defaultProps = {
  mainNotes: 'mainNotes',
};

export default AboutNote;
