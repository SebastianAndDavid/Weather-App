import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../../Context/UserContext";

export default function NotProtected() {
  const { isUser } = useUserContext();
  if (isUser === true) return <Navigate to="/user-home" />;
  return <Outlet />;
}
