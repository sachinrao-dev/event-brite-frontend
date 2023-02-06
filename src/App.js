import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Constant/Dashboard";
import Login from "./Components/Constant/Login";
import UpdateEvent from "./Components/Constant/UpdateEvent";
import CreateEvent from "./Components/Constant/CreateEvent";
import SingleEvent from "./Components/Constant/SingleEvent";
// const eventDetails = require("./Components/Constant/SingleEvent");

function App() {
  return (
    <div className="MainContainer">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/update/:id" element={<UpdateEvent />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/eventDetail/:id" element={<SingleEvent />} />
      </Routes>
    </div>
  );
}

export default App;
