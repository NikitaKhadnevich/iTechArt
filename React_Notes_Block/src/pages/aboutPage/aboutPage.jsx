import React from 'react';
import { Typography } from '@material-ui/core';

import { AboutDesc } from './styled';
import { aboutData } from './aboutReceiver';

const AboutPage = () => (
  <AboutDesc>
    <Typography component='h4' variant='h4' align='center'>
      {aboutData.title}
    </Typography>
    <Typography variant='h5' align='center' paragraph>
      {aboutData.describe}
    </Typography>
  </AboutDesc>
);
export default AboutPage;
