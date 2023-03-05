import { Navigate, Outlet } from "react-router-dom";

import { EViewType } from "../../../enums/EViewType";

const ProtectedRoute = () => {
  //todo
  if (false) {
    return <Navigate replace to={EViewType.LOGIN} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
