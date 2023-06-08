import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/NotProtected/Home";
import UserProvider from "./Context/UserContext";
import ProtectedRoute from "./Components/Protected/ProtectedRoute";
import UserHome from "./Components/Protected/UserHome";
import NotProtected from "./Components/NotProtected/NotProtected";

function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <Routes>
            <Route element={<NotProtected />}>
              <Route path="/" element={<Home />} />
            </Route>

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
