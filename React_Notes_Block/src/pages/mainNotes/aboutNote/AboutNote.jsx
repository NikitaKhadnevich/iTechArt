import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

import AboutWrapperDesc from './styled';

const AboutNote = ({ aboutData }) => (
  <AboutWrapperDesc>
    <Typography variant='body1'>{aboutData}</Typography>
  </AboutWrapperDesc>
);

AboutNote.propTypes = {
  aboutData: PropTypes.string,
};

AboutNote.defaultProps = {
  aboutData: 'aboutData',
};

export default AboutNote;
