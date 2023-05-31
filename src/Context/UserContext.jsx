/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useState, useContext, useEffect } from "react";
// import { getUser } from "../Utils/supabase-utils";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [isUser, setIsUser] = useState({});
  // async function verifyUser() {
  //   const res = await getUser();
  //   console.log("res", res);
  //   if (res) {
  //     setIsUser(res);
  //   } else {
  //     null;
  //   }
  // }

  // useEffect(() => {
  //   verifyUser();
  // }, []);
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

// export function useUser() {
//   const { isUser } = useContext(UserContext);
//   if (isUser) {
//     return isUser;
//   } else {
//     return null;
//   }
// }
