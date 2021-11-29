import React from 'react';
import loadable from '@loadable/component';
import { Spiner } from './aboutReceiver';

export default loadable(() => import('./aboutPageList'), {
  fallback: <Spiner />,
});
