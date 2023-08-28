import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const UserAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post("http://localhost:3005/api/login", inputs);
    setCurrentUser(res.data);
  };

  const signup = async (inputs) => {
    await axios.post("http://localhost:3005/api/signup", inputs);
    setCurrentUser(inputs);
  };
  
  const logout = () => {
    setCurrentUser(null)
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <>
    <UserAuthContext.Provider value={{ currentUser, login, signup, logout }}>
      {children}
    </UserAuthContext.Provider>
    </>
  );
};
