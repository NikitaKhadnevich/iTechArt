import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { INITIALNOTE, notesList } from './aboutNoteReceiver';

import AboutNote from './AboutNote';

const AboutNoteContainer = () => {
  const noteList = useSelector(notesList);
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

export default AboutNoteContainer;
