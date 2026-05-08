import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  let [username, setUsername] = useState("");

  let [password, setPassword] = useState("");

  const nav = useNavigate();

  const handleLogin = () => {
    let users = JSON.parse(localStorage.getItem("accounts")) || [];

    let found = users.find(
      (u) => u.username === username && u.password === password,
    );

    if (found) {
      localStorage.setItem("user", username);

      nav("/cars");

      window.location.reload();
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="loginBox">
      <h1>Sign In</h1>

      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default Login;
