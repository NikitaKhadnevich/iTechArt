import React from 'react';
import { Typography, Container } from '@material-ui/core';

import useStyles from './styled';

import { aboutData } from './aboutReciever';

const AboutPage = () => {
  const { aboutDesc } = useStyles();

  return (
    <Container className={aboutDesc}>
      <Typography component='h3' variant='h3' align='center'>
        {aboutData.title}
      </Typography>
      <Typography variant='h5' align='center' paragraph>
        {aboutData.describe}
      </Typography>
    </Container>
  );
};
export default AboutPage;
