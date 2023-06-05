/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useState, useContext, useEffect } from "react";
import { getCurrentUser, getUser } from "../Utils/supabase-utils";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [isUser, setIsUser] = useState(true);
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

// eslint-disable-next-line react-refresh/only-export-components
export function useUserContext() {
  return useContext(UserContext);
}
