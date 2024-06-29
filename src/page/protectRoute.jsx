import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = () => {
  const auth = JSON.parse(localStorage.getItem("auth-token"));
  return auth ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectRoute;
