import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const listEvent = () => {
    navigate("/dashboard");
  };
  const createEvent = () => {
    navigate("/create");
  };
  return (
    <div>
      <button type="button" onClick={listEvent}>
        All event
      </button>
      <button type="button" onClick={createEvent}>
        Create Event
      </button>
    </div>
  );
}

export default NavBar;
