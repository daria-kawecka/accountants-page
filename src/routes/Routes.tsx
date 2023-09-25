import { FC } from 'react';
import {
  Routes as ReactRoutes,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import { routesMap } from './routesMap';
import { Home } from './Home';
import { Accountants } from './Accountants';

export const Routes: FC = () => {
  return (
    <Router>
      <ReactRoutes>
        <Route path={routesMap.home} element={<Home />} />
        <Route path={routesMap.accountants} element={<Accountants />} />
      </ReactRoutes>
    </Router>
  );
};