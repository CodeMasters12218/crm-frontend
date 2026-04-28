import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { useEffect } from "react";

export default function PrivateRoute() {
  const { token, user, fetchUser } = useAuthStore();

  useEffect(() => {
    if (token && !user) fetchUser();
  }, [token]);

  if (!token) return <Navigate to="/login" />;

  return <Outlet />;
}