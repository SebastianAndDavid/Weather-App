import "./App.css";
import Home from "./Components/Home";
import Auth from "./Components/Auth";
import { useEffect, useState } from "react";
import { getUser } from "./Services/supabase-utils";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecentCities from "./Components/RecentCities";

function App() {
  const [user, setUser] = useState({});

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
        <Routes>
          <Route path="/" element={<Home user={user} />}>
            {user && <Route element={<RecentCities />} />}
          </Route>
        </Routes>
        <Auth user={user} />
      </Router>
    </>
  );
}

export default App;
