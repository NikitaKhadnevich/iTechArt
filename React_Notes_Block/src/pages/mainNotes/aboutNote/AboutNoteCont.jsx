import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

import AboutWrapperDesc from './styled';

const AboutNoteCont = ({ aboutData }) => (
  <AboutWrapperDesc>
    <Typography variant='body1'>{aboutData}</Typography>
  </AboutWrapperDesc>
);

AboutNoteCont.propTypes = {
  aboutData: PropTypes.string,
};

AboutNoteCont.defaultProps = {
  aboutData: 'aboutData',
};

export default AboutNoteCont;
