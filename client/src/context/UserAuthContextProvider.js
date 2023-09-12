import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const signin = async (inputs) => {
    const res = await axios.post("/api/signin/", inputs);
    setCurrentUser(res.data);
  };

  const signup = async (inputs) => {
    await axios.post("/api/signup/", inputs);
    setCurrentUser(inputs);
  };

  const logout = async () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
    await axios.post("/api/logout/");
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
