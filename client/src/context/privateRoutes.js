import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserAuthContext } from "./UserAuthContextProvider";

const { Navigate } = require("react-router");

const useAuth = () => {
  const { currentUser } = useContext(UserAuthContext);
  return currentUser
};

const PrivateRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;