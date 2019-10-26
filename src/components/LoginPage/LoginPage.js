import React, { Component } from "react";
import "./LoginPage.css";
import LoginForm from "./LoginForm/LoginForm";
import RegistrationPage from "../RegistrationPage/RegistrationPage";

function IsLoged (props) {
    return <LoginForm />

}

function IsNotLogged (props) {
    return <RegistrationPage />
}

function IsLogPage(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <IsLoged />;
    }
    return <IsNotLogged />;
  }

class LoginPage extends Component {
    state = {
        lo: true
  }

  render() {
    return (
        <IsLogPage isLoggedIn = {this.state.lo} />
    )
  }
}

export default LoginPage
