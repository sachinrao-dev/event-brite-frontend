import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./Components/Constant/Dashboard";
import Login from "./Components/Constant/Login";
import UpdateEvent from "./Components/Constant/UpdateEvent";
import CreateEvent from "./Components/Constant/CreateEvent";

function App() {
  const navigate = useNavigate();
  const listEvent = () => {
    navigate("/dashboard");
  };
  const createEvent = () => {
    navigate("/create");
  };
  return (
    <div>
      <div>
        <button type="button" onClick={listEvent}>
          All event
        </button>
        <button type="button" onClick={createEvent}>
          Create Event
        </button>
      </div>
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
