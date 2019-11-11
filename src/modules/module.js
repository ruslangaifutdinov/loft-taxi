import React from 'react'

export const AuthContext = React.createContext(false);

export const AuthProvider = ({ children }) => {
  
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const login = (email, password) => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};