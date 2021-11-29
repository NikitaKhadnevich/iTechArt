import React from 'react';
import loadable from '@loadable/component';
import { Spinner } from './ListNotesReceiver';

export default loadable(() => import('./ListNotes'), {
  fallback: <Spinner />,
});
