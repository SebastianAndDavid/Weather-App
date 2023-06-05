import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../../Context/UserContext";

export default function ProtectedRoute() {
  const { isUser } = useUserContext();
  if (isUser === false) return <Navigate to="/" />;
  return <Outlet />;
}
