import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});
}
