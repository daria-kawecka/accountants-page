import { FC } from 'react';
import {
  Routes as ReactRoutes,
  Route,
  HashRouter as Router,
} from 'react-router-dom';
import { routesMap } from './routesMap';
import { Home } from './Home';
import { Accountants } from './Accountants';
import { Accountant } from './Accountant';

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
