import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/NotProtected/Home";
import UserProvider from "./Context/UserContext";
import Auth from "./Components/NotProtected/Auth";
import ProtectedRoute from "./Components/Protected/ProtectedRoute";
import UserHome from "./Components/Protected/UserHome";

function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="auth" element={<Auth />} />

            <Route element={<ProtectedRoute />}>
              <Route path="user-home" element={<UserHome />} />
            </Route>
          </Routes>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
