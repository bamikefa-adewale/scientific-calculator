import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/Auth";

const ProtectRoute = () => {
  const { session } = useAuthStore();
  return session ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectRoute;
