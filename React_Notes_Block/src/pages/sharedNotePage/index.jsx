import React from 'react';
import loadable from '@loadable/component';
import { Spinner } from './sharedNoteReceiver';

export default loadable(() => import('./sharedNotesList'), {
  fallback: <Spinner />,
});
