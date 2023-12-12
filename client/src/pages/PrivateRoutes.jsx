import { Outlet, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function PrivateRoutes() {
  const { isAuthenticated, isLoading } = useAuth0();

  return !isLoading ? (
    isAuthenticated ? (
      <Outlet />
    ) : (
      <Navigate to="/" />
    )
  ) : (
    <div>Loading...</div>
  );
}
