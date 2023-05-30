import { Outlet, Navigate } from "react-router-dom";
import { useUser } from "../../Context/UserContext";

export default function ProtectedRoute() {
  const user = useUser();
  console.log("user in protected route", user);
  if (user[0] && !user[0].email) return <Navigate to="/" replace={true} />;
  return <Outlet />;
}
