/**
 * define the authentication routes
 * export the authentication routes
 */

import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const signin = async (inputs) => {
    const res = await axios.post("https://m-wallet.onrender.com/api/signin/", inputs);
    localStorage.setItem("user", JSON.stringify(res.data));
    setCurrentUser(res.data);
  };

  const signup = async (inputs) => {
    await axios.post("https://m-wallet.onrender.com/api/signup/", inputs);
    setCurrentUser(inputs);
  };

  const logout = async () => {
    localStorage.removeItem("user");
    const token = currentUser.token;
    await axios.post("https://m-wallet.onrender.com/api/logout/", {token});
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <UserAuthContext.Provider value={{ currentUser, signin, signup, logout }}>
      {children}
    </UserAuthContext.Provider>
  );
};
