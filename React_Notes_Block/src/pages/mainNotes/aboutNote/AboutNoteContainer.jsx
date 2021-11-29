import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import INITIALNOTE from './aboutNoteReceiver';
import AboutNote from './AboutNote';

const AboutNoteContainer = ({ mainNotes }) => {
  const [aboutData, setAboutData] = useState();
  const addDescription = () => {
    const [sortDescription] = mainNotes.filter(
      (itemStatus) => itemStatus.isActive
    );
    if (sortDescription) {
      setAboutData(sortDescription.description);
    } else {
      setAboutData(INITIALNOTE);
    }
  };

  useEffect(() => {
    addDescription();
  }, [mainNotes]);

  return <AboutNote aboutData={aboutData} />;
};

AboutNoteContainer.propTypes = {
  mainNotes: PropTypes.string,
};

AboutNoteContainer.defaultProps = {
  mainNotes: 'mainNotes',
};

export default AboutNoteContainer;
