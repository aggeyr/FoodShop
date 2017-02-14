import { Route, IndexRedirect } from 'react-router';
import React from 'react';

import App from '../src/containers/App';
import BasketContainer from '../src/containers/BasketContainer.jsx';
import LandingContainer from '../src/containers/LandingContainer.jsx';
import MenuContainer from '../src/containers/MenuContainer.jsx';
import OrderContainer from '../src/containers/OrderContainer.jsx';
import Login from '../src/components/login/Login.jsx';
import NotFound from './components/layout/NotFound.jsx';
import auth from './service/auth';

const authService = new auth('jA3mJoXVYSxJxlDbB4Oyi4VsDeSR0Jxd', 'nureckiy.eu.auth0.com');

const requireAuth = (nextState, replace) => {
  if (!authService.loggedIn()) {
    replace({ pathname: '/login' });
  }
};

const removeToken = (nextState, replace) => {
  localStorage.removeItem('id_token');
  localStorage.removeItem('profile');
  replace({ pathname: '/login' });
};

const routes = (
  <div>
    <Route path="/" component={App} auth={authService}>
      <IndexRedirect to="/home" />
      <Route path="/home" component={LandingContainer} />
      <Route path="/menu/:category" component={MenuContainer} />
      <Route path="/basket" component={BasketContainer} />
      <Route path="/order" component={OrderContainer} onEnter={requireAuth} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Login} onEnter={removeToken} />
    </Route>
    <Route path="*" component={NotFound} />
  </div>
);

export default routes;