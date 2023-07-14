import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  login: (token) => {},
  logout: () => {},
});

export default AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState();
  const userisLoggedIn = !!authToken;

  const login = (token) => {
    // console.log("loggin in");
    setAuthToken(token);
    // console.log(token);
  };

  const logout = () => {
    setAuthToken(null);
  };

  const value = {
    token: authToken,
    isAuthenticated: userisLoggedIn,
    login: login,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};