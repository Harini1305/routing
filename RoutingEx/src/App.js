import { Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";

import Login from "./Login";
import Welcome from "./Welcome";

import StudentForm from "./StudentForm";
import Result from "./Result";

import Products from "./Products";
import Product from "./Product";

import "./App.css";

const App = () => {
  let user = localStorage.getItem("name");

  const logout = () => {
    localStorage.removeItem("name");

    window.location.href = "/";
  };

  return (
    <>
      {user && (
        <nav>
          <Link to="/welcome">Welcome</Link>

          <Link to="/home">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/form">Calculate</Link>

          <Link to="/result">Result</Link>

          <Link to="/products">Products</Link>

          <button onClick={logout}>Logout</button>
        </nav>
      )}

      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/welcome" element={<Welcome />} />

        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/form" element={<StudentForm />} />

        <Route path="/result" element={<Result />} />

        <Route path="/products" element={<Products />} />

        <Route path="/product/:id/:price/:qty" element={<Product />} />
      </Routes>
    </>
  );
};

export default App;
