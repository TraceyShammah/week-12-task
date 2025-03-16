import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminRoute = () => {
  const { user } = useAuth();
  return user && user.role === "Admin" ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default AdminRoute;