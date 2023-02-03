import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Constant/Dashboard";
import Login from "./Components/Constant/Login";

function App() {
  return (
    <div>
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
