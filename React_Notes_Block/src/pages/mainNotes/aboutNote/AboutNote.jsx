/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { INITIALNOTE } from '../../../config/constants/initNoteData';
import AboutNoteCont from './AboutNoteCont';

const AboutNote = ({ mainNotes }) => {
  const [aboutData, setAboutData] = useState();

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
    <AboutNoteCont aboutData={aboutData} />
  );
};

AboutNote.propTypes = {
  mainNotes: PropTypes.string,
};

AboutNote.defaultProps = {
  mainNotes: 'mainNotes',
};

export default AboutNote;
