import { FC } from 'react';
import {
  Routes as ReactRoutes,
  Route,
  HashRouter as Router,
} from 'react-router-dom';

import { Accountant } from './Accountant';
import { Accountants } from './Accountants';
import { Home } from './Home';
import { routesMap } from './routesMap';

export const Routes: FC = () => {
  return (
    <Router>
      <ReactRoutes>
        <Route path={routesMap.home} element={<Home />} />
        <Route path={routesMap.accountants} element={<Accountants />} />
        <Route path={routesMap.accountant} element={<Accountant />} />
      </ReactRoutes>
    </Router>
  );
};
