import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const GuestRoute = () => {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/auth/me`, {
      credentials: "include",
    })
      .then((res) => setStatus(res.ok ? "authenticated" : "unauthenticated"))
      .catch(() => setStatus("unauthenticated"));
  }, []);

  if (status === "checking") return null;
  if (status === "authenticated") return <Navigate to="/dashboard" replace />;

  return <Outlet />;
};

export default GuestRoute;
