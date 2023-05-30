/* eslint-disable react/prop-types */
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { getUser } from "../Utils/supabase-utils";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});

  async function verifyUser() {
    const res = await getUser();
    setUser(res);
  }

  useEffect(() => {
    verifyUser();
  }, []);

  const stateAndSetters = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={stateAndSetters}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const { user, setUser } = useContext(UserContext);
  return [user, setUser];
}
