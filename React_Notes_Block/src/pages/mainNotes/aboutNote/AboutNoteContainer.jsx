import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import INITIALNOTE from './aboutNoteReceiver';
import AboutNote from './AboutNote';

const AboutNoteContainer = ({ noteList }) => {
  const [aboutData, setAboutData] = useState();
  const addDescription = () => {
    const [sortDescription] = noteList.filter(
      (itemStatus) => itemStatus.isActive
    );
    if (sortDescription) {
      setAboutData(sortDescription.description);
    } else {
      setAboutData(INITIALNOTE);
    }
  };

  useEffect(() => {
    if (Array.isArray(noteList)) {
      addDescription();
    }
  }, [noteList]);

  return <AboutNote aboutData={aboutData} />;
};

AboutNoteContainer.propTypes = {
  noteList: PropTypes.string,
};

AboutNoteContainer.defaultProps = {
  noteList: 'noteList',
};

export default AboutNoteContainer;
