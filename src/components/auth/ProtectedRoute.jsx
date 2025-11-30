// src/components/auth/ProtectedRoute.jsx

import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Loader from "../common/Loader";

const ProtectedRoute = ({ children, requireRole }) => {
  const { user, isAuthenticated, loading } = useAuth();
  const location = useLocation();

  // ✅ While auth state is being restored, show loader (prevent flickering / blank page)
  if (loading) {
    return <Loader fullScreen />;
  }

  // ✅ Not logged in → redirect to login (and remember the page they tried to access)
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ✅ Normalize both to uppercase (backend returns USER / ADMIN)
  const normalizedUserRole = user?.role?.toUpperCase();
  const normalizedRequiredRole = requireRole?.toUpperCase();

  // ✅ If a specific role is required and user role doesn't match
  if (normalizedRequiredRole && normalizedUserRole !== normalizedRequiredRole) {
    const redirectTo = normalizedUserRole === "ADMIN"
      ? "/admin/dashboard"
      : "/user/dashboard";

    return <Navigate to={redirectTo} replace />;
  }

  // ✅ Authorized → render the component
  return children;
};
export default ProtectedRoute;
