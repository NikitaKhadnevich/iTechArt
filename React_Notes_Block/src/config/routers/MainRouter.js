import React from 'react';
import { Route } from 'react-router-dom';

import { MainNotes } from './ArrRouterReciever';

const MainNotesRoute = () => <Route path='/notes' element={<MainNotes />} />;

export default MainNotesRoute;
