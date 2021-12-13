import React from 'react';

import HeaderNavigation, { ToolbarNav } from './styled';

import { IconName, ItemsNavi, UserMenu } from './headerReceiver';

const HeaderNav = () => (
  <HeaderNavigation>
    <ToolbarNav>
      <IconName />
      <ItemsNavi />
      <UserMenu />
    </ToolbarNav>
  </HeaderNavigation>
);
export default HeaderNav;
