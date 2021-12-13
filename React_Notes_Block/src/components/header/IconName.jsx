import React from 'react';
import BookIcon from '@mui/icons-material/Book';
import { Typography } from '@material-ui/core';

import IconBlock from './styled';

const IconName = () => (
  <IconBlock>
    <BookIcon />
    <Typography variant='h6'>Waha Notes</Typography>
  </IconBlock>
);
export default IconName;
