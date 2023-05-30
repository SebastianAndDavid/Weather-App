import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/NotProtected/Home";
import UserProvider from "./Context/UserContext";
// import { useState } from "react";
// import { getUser } from "./Utils/supabase-utils";
// import { useEffect } from "react";
import Auth from "./Components/NotProtected/Auth";
import ProtectedRoute from "./Components/Protected/ProtectedRoute";
import UserHome from "./Components/Protected/UserHome";

function App() {
  // const [user, setUser] = useState({});
  // console.log("user", user);
  // async function handleGetUser() {
  //   const res = await getUser();
  //   setUser(res);
  //   return res;
  // }

  // useEffect(() => {
  //   handleGetUser();
  // }, []);

  return (
    <>
      <Router>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/user-home" element={<UserHome />} />
            </Route>
          </Routes>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
