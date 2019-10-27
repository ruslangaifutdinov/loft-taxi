import React from "react";
import "./LoginPage.css";
import { LoginForm } from "./LoginForm/LoginForm";
import { RegPage } from './../RegistrationPage/RegistrationPage'
import  MapPage from './../MapPage/MapPage'
import { ProfilePage } from './../ProfilePage/ProfilePage'


export const LoginPage = ({useState}) =>{

    const [page, setForm]  = React.useState('loginform')
    console.log('Login Page: ' + page);

    return (
    <div>
      <div>
            {page === 'loginform' && <LoginForm setForm = {setForm}/>}
            {page === 'profile' && <ProfilePage setForm = {setForm}/>}
            {page === 'singupform' && <RegPage setForm = {setForm}/>}
            {page === 'map' && <MapPage setForm = {setForm}/>}
      </div>
      </div>
    )
}
