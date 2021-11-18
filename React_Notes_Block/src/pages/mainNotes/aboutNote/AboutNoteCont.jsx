import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Container } from '@material-ui/core';
import useStyles from './styled';

const AboutNoteCont = ({ aboutData }) => {
  const { aboutWrapper } = useStyles();

  return (
    <Container className={aboutWrapper}>
      <Typography variant='body1'>{aboutData}</Typography>
    </Container>
  );
};

AboutNoteCont.propTypes = {
  aboutData: PropTypes.string,
};

AboutNoteCont.defaultProps = {
  aboutData: 'aboutData',
};

export default AboutNoteCont;
