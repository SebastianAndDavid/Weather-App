/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useState, useContext, useEffect } from "react";
import { getCurrentUser, getUser } from "../Utils/supabase-utils";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [isUser, setIsUser] = useState(verifyUser());
  const [user, setUser] = useState({});
  async function verifyUser() {
    const res = await getUser();
    if (res) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  }

  async function setCurrentUser() {
    const res = await getCurrentUser();
    setUser(res);
  }

  useEffect(() => {
    verifyUser();
    setCurrentUser();
  }, []);
  console.log("user in context", user);
  const stateAndSetters = {
    isUser,
    setIsUser,
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={stateAndSetters}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
