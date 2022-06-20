import { Navigate, Outlet } from "react-router-dom";

import useUser from "../../hooks/useUser";

const ProtectedRoute = ({ redirectPath = "/" }) => {
  const { user } = useUser();
  console.log(user);
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;