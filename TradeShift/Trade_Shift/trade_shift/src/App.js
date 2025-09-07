import React, { useState } from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import "./App.css";

function App() {
  const [page, setPage] = useState("login"); // "login" or "register"

  return (
    <div>
      <Navbar switchPage={setPage} />
      {page === "login" ? <Login /> : <Register />}
    </div>
  );
}

export default App;
