import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../../Context/UserContext";

export default function ProtectedRoute() {
  const { isUser } = useUserContext();
  console.log("user in protected route", isUser);
  if (!isUser) return <Navigate to="/" />;
  return <Outlet />;
}
