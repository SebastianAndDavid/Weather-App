import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/NotProtected/Home";
import UserProvider from "./Context/UserContext";
import { useState } from "react";
import { getUser } from "./Utils/supabase-utils";
import { useEffect } from "react";

function App() {
  const [user, setUser] = useState({});
  console.log("user", user);
  async function handleGetUser() {
    const res = await getUser();
    setUser(res);
    return res;
  }

  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <>
      <Router>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Auth/> - onSubmit, set the user into state in Context. Then redirect to <UserHome/> */}
            {/* <Route element={<ProtectedRoute/>} - this functions checks if there's a user, if YES then go to <UserHome/> which also calls <RecentCities/> /> */}
          </Routes>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
