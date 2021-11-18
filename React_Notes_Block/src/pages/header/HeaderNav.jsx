import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import IconName from '../../components/header/IconName';
import useStyles from './styled';
import ItemsNavi from '../../components/header/ItemsNavi';

const HeaderNav = () => {
  const { header, toolbar } = useStyles();
  return (
    <AppBar className={header}>
      <Toolbar className={toolbar} style={{ padding: '0' }}>
        <IconName />
        <ItemsNavi />
      </Toolbar>
    </AppBar>
  );
};

export default HeaderNav;
