import React from 'react';
import {
  Switch,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PrivateRoute, PublicRoute } from './routes';
import Login from '../components/Login';
import Game from '../components/Game';

const Routers = () => {
  const userSigned = useSelector((state) => state.user.userSigned);
  return (

    <Switch>
      <PrivateRoute exact path="/" authenticated={userSigned} component={Game} />
      <PublicRoute path="/login" authenticated={userSigned} component={Login} />
    </Switch>

  );
};

export default Routers;
