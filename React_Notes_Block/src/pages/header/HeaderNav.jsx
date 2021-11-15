import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import IconName from '../../components/header/IconName';
import useStyles from './styled';

const HeaderNav = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.header}>
        <Toolbar>
          <IconName />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default HeaderNav;
