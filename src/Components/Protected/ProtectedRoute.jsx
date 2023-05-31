import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../../Context/UserContext";

export default function ProtectedRoute() {
  const user = useUserContext();
  console.log("user in protected route", user);
  if (user === null) return <Navigate to="/" />;
  return <Outlet />;
}
