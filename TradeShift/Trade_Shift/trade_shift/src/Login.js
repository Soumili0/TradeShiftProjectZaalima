import React, { useState } from "react";

function Login({ onLoginSuccess, onSwitchToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === email.trim() && u.password === password
    );

    if (user) {
      alert(`Welcome ${user.firstName}! Login Successful 🎉`);
      setEmail("");
      setPassword("");
      onLoginSuccess(); // dashboard দেখানোর জন্য
    } else {
      alert("Invalid email or password ❌");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ marginTop: "10px" }}
        />
        <button type="submit" style={{ marginTop: "20px" }}>
          Login
        </button>
      </form>
      <p style={{ marginTop: "10px" }}>
        Don't have an account?{" "}
        <span
          style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
          onClick={onSwitchToRegister}
        >
          Please register first
        </span>
      </p>
    </div>
  );
}

export default Login;
/**
 * import React, { useState } from "react";

function Login({ onLoginSuccess, onSwitchToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8081/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const user = await res.json();
        alert(`Welcome ${user.firstName}! Login Successful 🎉`);
        setEmail("");
        setPassword("");
        onLoginSuccess(); // dashboard দেখানোর জন্য
      } else {
        alert("Invalid email or password ❌");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Backend error. Please check server.");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ marginTop: "10px" }}
        />
        <button type="submit" style={{ marginTop: "20px" }}>
          Login
        </button>
      </form>
      <p style={{ marginTop: "10px" }}>
        Don't have an account?{" "}
        <span
          style={{ color: "blue", cursor: "pointer", textDecoration: "underline" }}
          onClick={onSwitchToRegister}
        >
          Please register first
        </span>
      </p>
    </div>
  );
}

export default Login;

 */