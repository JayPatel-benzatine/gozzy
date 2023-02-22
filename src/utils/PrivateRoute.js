import React from "react";
import { Outlet ,Navigate} from "react-router-dom";
import { getToken } from "./Common";

function PrivateRoute() {
  const token= getToken();
  return token ? <Outlet/> : <Navigate to='/login' />
}
export default PrivateRoute;
