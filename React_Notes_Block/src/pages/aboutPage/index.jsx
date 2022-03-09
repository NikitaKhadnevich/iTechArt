import React from 'react';
import loadable from '@loadable/component';
import { Spinner } from './aboutReceiver';

export default loadable(() => import('./aboutPageList'), {
  fallback: <Spinner />,
});
