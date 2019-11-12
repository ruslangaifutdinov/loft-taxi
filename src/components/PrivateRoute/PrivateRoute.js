import React from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../modules/module'

const PrivateRoute = ({ component: Component, ...props }) => {
  
  let { isLoggedIn }  = React.useContext(AuthContext);
  
  console.log('Private Route console: ' + isLoggedIn)

  console.log(Component)

  if (!isLoggedIn) {

    return <Component {...props} />;
  }

  return <NavLink to="/login" />;
};

export default PrivateRoute