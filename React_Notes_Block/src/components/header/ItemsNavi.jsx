import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from '../../pages/header/styled';

const ItemsNavi = () => {
  const classes = useStyles();
  return (
    <div className={classes.navigation}>
      <Link to='/notes' data-path='/notes' className={classes.navLink}>
        <Typography variant='h6'>Notes</Typography>
      </Link>
      <Link
        to='/shared-notes'
        data-path='/shared-notes'
        className={classes.navLink}
      >
        <Typography variant='h6'>SharedNotes</Typography>
      </Link>
      <Link to='/about' data-path='/about' className={classes.navLink}>
        <Typography variant='h6'>About</Typography>
      </Link>
    </div>
  );
};

export default ItemsNavi;
