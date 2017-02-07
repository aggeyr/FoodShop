import { Route, IndexRedirect } from 'react-router';
import React from 'react';

import App from '../src/containers/App';
import BasketContainer from '../src/containers/BasketContainer.jsx';
import LandingContainer from '../src/containers/LandingContainer.jsx';
import MenuContainer from '../src/containers/MenuContainer.jsx';
import OrderContainer from '../src/containers/OrderContainer.jsx';
import Login from '../src/components/login/Login.jsx';
import NotFound from './components/layout/NotFound.jsx';

const routes = (
  <div>
    <Route path="/" component={App}>
      <IndexRedirect to="/home" />
      <Route path="/login" component={Login} />
      <Route path="/home" component={LandingContainer} />
      <Route path="/menu/:category" component={MenuContainer} />
      <Route path="/basket" component={BasketContainer} />
      <Route path="/order" component={OrderContainer} />
    </Route>
    <Route path="*" component={NotFound} />
  </div>
);

export default routes;