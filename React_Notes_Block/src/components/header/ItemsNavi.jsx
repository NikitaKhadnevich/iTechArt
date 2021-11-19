import React from 'react';
import { Typography } from '@material-ui/core';
import { notes, sharedNotes, about } from './headerReciever';

import { Navigation, NavLink } from './styled';

const ItemsNavi = () => (
  <Navigation>
    <NavLink to={notes} data-path={notes}>
      <Typography variant='h6'>Notes</Typography>
    </NavLink>
    <NavLink to={sharedNotes} data-path={sharedNotes}>
      <Typography variant='h6'>SharedNotes</Typography>
    </NavLink>
    <NavLink to={about} data-path={about}>
      <Typography variant='h6'>About</Typography>
    </NavLink>
  </Navigation>
);
export default ItemsNavi;
