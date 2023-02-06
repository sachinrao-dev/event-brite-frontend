import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Constant/Dashboard";
import Login from "./Components/Constant/Login";
import UpdateEvent from "./Components/Constant/UpdateEvent";
import CreateEvent from "./Components/Constant/CreateEvent";

function App() {
  return (
    <div className="MainContainer">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/update/:id" element={<UpdateEvent />} />
        <Route path="/create" element={<CreateEvent />} />
      </Routes>
    </div>
  );
}

export default App;
