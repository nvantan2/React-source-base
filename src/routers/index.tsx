import { history } from '../history';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import WrapperFormAuth from '../components/Auth/WrapperForm';

import HomePage from '../containers/HomePage';
import LoginPage from '../containers/LoginPage';
import NotFoundPage from '../containers/NotFoundPage';
import RegisterPage from '../containers/RegisterPage';
import PrivateRoute from './PrivateRoute';
import { ROUTER } from 'shared/constant/routes';

const Routers: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route
          path={ROUTER.Login}
          render={() => (
            <WrapperFormAuth>
              <LoginPage />
            </WrapperFormAuth>
          )}
        />
        <Route
          path={ROUTER.REGISTER}
          render={() => (
            <WrapperFormAuth>
              <RegisterPage />
            </WrapperFormAuth>
          )}
        />
        <PrivateRoute path="/" component={HomePage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default Routers;
