import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import IconName from '../../components/header/IconName';
import useStyles from './styled';

const HeaderNav = () => {
  const { header } = useStyles();
  return (
    <AppBar className={header}>
      <Toolbar>
        <IconName />
      </Toolbar>
    </AppBar>
  );
};

export default HeaderNav;
