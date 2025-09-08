import React, { useState } from "react";
import Navbar from "./Navbar";                   // Navbar src/ এ
import Dashboard from "./components/Dashboard"; // Dashboard components/ এ
import Login from "./Login";                     // Login src/ এ
import Register from "./Register";               // Register src/ এ
import "./App.css";

function App() {
  const [page, setPage] = useState("login"); // "login" বা "register"
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Navbar switchPage={setPage} />
      {isLoggedIn ? (
        <Dashboard />
      ) : page === "login" ? (
        <Login onLoginSuccess={() => setIsLoggedIn(true)} />
      ) : (
        <Register onRegisterSuccess={() => setPage("login")} />
      )}
    </div>
  );
}

export default App;
