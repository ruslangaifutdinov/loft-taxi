import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import Header from '../Header/Header'
import LoginPage from '../LoginPage/LoginPage'
import MapPage from '../MapPage/MapPage'
import ProfilePage from '../ProfilePage/ProfilePage'
import SingUp from '../SingUp/SingUp'

const Layout = () => (
  <>
    <Header />
    <main>
      <Switch>
        <Redirect from="/" exact to="/login" />
        <Route path="/login" exact component={LoginPage} />
        <PrivateRoute path="/map" exact component={MapPage} />
        <PrivateRoute path="/profile" exact component={ProfilePage} />
        <Route path="/singup" exact component={SingUp} />
        <Redirect to="/" />
      </Switch>
    </main>
  </>
)

export default Layout