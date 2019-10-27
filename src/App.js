import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import MapPage from "./components/MapPage/MapPage"
import { LoginPage } from "./components/LoginPage/LoginPage"
import { ProfilePage } from "./components/ProfilePage/ProfilePage"
import { RegPage } from "./components/RegistrationPage/RegistrationPage"


export const App = ({useState}) => {

    const [page, setPage]  = React.useState('login')

    console.log(page)
    
    return (
      <div>
      <Header setPage={setPage}/>
      
      <div>
            {page === 'login' && <LoginPage/>}
            {page === 'profile' && <ProfilePage/>}
            {page === 'singup' && <RegPage/>}
            {page === 'map' && <MapPage/>}
      </div>
      </div>
      
    );
}