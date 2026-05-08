import { Routes, Route, Link } from "react-router-dom";

import Login from "./Login";

import Signup from "./Signup";

import Cars from "./Cars";

import UpdateCar from "./UpdateCar";

import RemoveCar from "./RemoveCar";

import ProtectedRoute from "./ProtectedRoute";

const Routing = () => {
  let user = localStorage.getItem("user");

  const logout = () => {
    localStorage.removeItem("user");

    window.location.href = "/";
  };

  return (
    <>
      <nav>
        <Link to="/cars">Cars</Link>

        <Link to="/update">Update</Link>

        <Link to="/remove">Remove</Link>

        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link to="/">Login</Link>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/cars" element={<Cars />} />

        <Route
          path="/update"
          element={
            <ProtectedRoute>
              <UpdateCar />
            </ProtectedRoute>
          }
        />

        <Route
          path="/remove"
          element={
            <ProtectedRoute>
              <RemoveCar />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default Routing;
