import React from "react"
import { Switch, Route, Redirect } from 'react-router-dom'
import MapPage from "../MapPage/MapPage"
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import { Header } from "../Header/Header"
import { LoginPage } from "../LoginPage/LoginPage"
import { ProfilePage } from '../ProfilePage/ProfilePage'
import { SingOn } from '../RegistrationPage/RegistrationPage'

import "./Layout.css"


const Layout = () => {
  return (
    <>
    <Header />
    <main>
      <Switch>
        <Redirect from="/" exact to="/login" />
          <Route path="/login" exact component={LoginPage} />
          <PrivateRoute path="/map" exact component={MapPage} />
          <PrivateRoute path="/profile" exact component={ProfilePage} />
          <PrivateRoute path="/singon" exect component={SingOn} />
        <Redirect to="/" />
      </Switch>
      </main>
    </>
  )
}

export default Layout