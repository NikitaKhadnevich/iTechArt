import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

import useStyles from './styled';

import { IconName, ItemsNavi } from './headerReciever';

const HeaderNavCont = () => {
  const { header, toolbar } = useStyles();
  return (
    <AppBar className={header}>
      <Toolbar className={toolbar}>
        <IconName />
        <ItemsNavi />
      </Toolbar>
    </AppBar>
  );
};

export default HeaderNavCont;
