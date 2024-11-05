import { Navigate, Outlet } from "react-router-dom";
import { useGetCurrentUser } from "../hooks/useGetCurrentUser";

const ProtectRoute = () => {
  const user = localStorage.getItem("user");
  const auth = JSON.parse(user);
  return auth ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectRoute;
