import "./App.css";
import Home from "./Components/Home";
import Auth from "./Components/Auth";
import { useEffect, useState } from "react";
import { getUser } from "./Services/supabase-utils";

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
      <Home user={user} />
      <Auth />
    </>
  );
}

export default App;
