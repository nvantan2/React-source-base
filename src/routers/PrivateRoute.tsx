import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import { CookiesStorage } from 'shared/config/cookie';
import { ROUTER } from 'shared/constant/routes';

interface IPrivateRoute {
  component: React.FC;
  path: string;
  exact: boolean;
}

const PrivateRoute: React.FC<IPrivateRoute> = ({ path, exact, component }) => {
  return CookiesStorage.getAccessToken() ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to={ROUTER.Login} />
  );
};

export default PrivateRoute;
