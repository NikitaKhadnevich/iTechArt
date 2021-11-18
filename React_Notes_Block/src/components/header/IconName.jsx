import React from 'react';
import BookIcon from '@mui/icons-material/Book';
import { Typography, Box } from '@material-ui/core';

import useStyles from './styled';

const IconName = () => {
  const classes = useStyles();
  return (
    <Box className={classes.iconBlock}>
      <BookIcon />
      <Typography variant='h6'>Waha Books</Typography>
    </Box>
  );
};

export default IconName;
