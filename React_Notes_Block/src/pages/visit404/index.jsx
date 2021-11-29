import React from 'react';
import loadable from '@loadable/component';
import { Spinner } from './visitReceiver';

export default loadable(() => import('./Visit404List'), {
  fallback: <Spinner />,
});
