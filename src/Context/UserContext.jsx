/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useState, useContext, useEffect } from "react";
import { getUser } from "../Utils/supabase-utils";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [isUser, setIsUser] = useState(verifyUser());
  async function verifyUser() {
    const res = await getUser();
    if (res) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  }

  useEffect(() => {
    verifyUser();
  }, []);
  console.log("isUser in context", isUser);
  const stateAndSetters = {
    isUser,
    setIsUser,
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
