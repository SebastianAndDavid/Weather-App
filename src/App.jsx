import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/NotProtected/Home";
import { useEffect } from "react";
import { userSignUp } from "./Utils/supabase-utils";

function App() {
  useEffect(() => {
    userSignUp();
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Auth/> - onSubmit, set the user into state in Context. Then redirect to <UserHome/> */}
          {/* <Route element={<ProtectedRoute/>} - this functions checks if there's a user, if YES then go to <UserHome/> which also calls <RecentCities/> /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
