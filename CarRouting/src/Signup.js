import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  let [username, setUsername] = useState("");

  let [password, setPassword] = useState("");

  const nav = useNavigate();

  const handleSignup = () => {
    let user = {
      username,
      password,
    };

    let users = JSON.parse(localStorage.getItem("accounts")) || [];

    users.push(user);

    localStorage.setItem("accounts", JSON.stringify(users));

    alert("Signup Successful");

    nav("/");
  };

  return (
    <div className="loginBox">
      <h1>Sign Up</h1>

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

      <button onClick={handleSignup}>Sign Up</button>

      <Link to="/">Sign In</Link>
    </div>
  );
};

export default Signup;
