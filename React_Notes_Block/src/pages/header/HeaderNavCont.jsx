import React from 'react';

import HeaderNav, { ToolbarNav } from './styled';

import { IconName, ItemsNavi } from './headerReciever';

const HeaderNavCont = () => (
  <HeaderNav>
    <ToolbarNav>
      <IconName />
      <ItemsNavi />
    </ToolbarNav>
  </HeaderNav>
);
export default HeaderNavCont;
