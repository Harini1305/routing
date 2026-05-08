import { Routes, Route, Link } from "react-router-dom";

import Login from "./Login";

import Signup from "./Signup";

import Cars from "./Cars";

const Routing = () => {
  let user = localStorage.getItem("user");

  const logout = () => {
    localStorage.removeItem("user");

    window.location.href = "/";
  };

  return (
    <>
      {user && (
        <nav>
          <Link to="/cars">Cars</Link>

          <button onClick={logout}>Logout</button>
        </nav>
      )}

      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/cars" element={<Cars />} />
      </Routes>
    </>
  );
};

export default Routing;
