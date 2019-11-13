  
import React from 'react';
import { NavLink } from 'react-router-dom';
import { LoginForm } from './LoginForm/LoginForm';
import { AuthContext } from '../../modules/module'

export const LoginPage = () => {

  const { isLoggedIn }  = React.useContext(AuthContext);

  console.log(isLoggedIn)

  if (isLoggedIn) {
    
    return <NavLink to="/map" />
  }

  return <LoginForm />
}
