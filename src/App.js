import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate replace to={"/login"} />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate replace to={"/home"} />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate replace to={"/login"} />}
        />
      </Routes>
    </div>
  );
}

export default App;
