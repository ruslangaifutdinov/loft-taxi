import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ isLoggedIn, component: Component, ...props }) => {
  
  console.log(Component)
  if (isLoggedIn) {
    return <Component {...props} />;
  }

  if (!isLoggedIn) {
    return <Redirect to="/singup" />;
  }

  return <Redirect to="/login" />;
};

const mapStateToProps = state => state.auth;

export default connect(mapStateToProps)(PrivateRoute);
