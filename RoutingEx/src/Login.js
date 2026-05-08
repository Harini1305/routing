import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Login = () => {
  let [username, setUsername] = useState("");

  let [password, setPassword] = useState("");

  const nav = useNavigate();

  function handleLogin() {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("name", username);

      nav("/welcome");

      window.location.reload();
    } else {
      alert("Login Failed");
    }
  }

  return (
    <div className="loginBox">
      <h1>Login Page</h1>

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
    </div>
  );
};

export default Login;
