import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/LoginStyle.css";

function CreateEvent() {
  const navigate = useNavigate();
  const [eventName, setEventName] = useState();
  const [description, setDescription] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [capacity, setCapacity] = useState();

  const insertData = async () => {
    const data = {
      event_name: eventName,
      event_description: description,
      start_date: `${new Date(startDate).toISOString().slice(0, -5)}Z`,
      end_date: `${new Date(endDate).toISOString().slice(0, -5)}Z`,
      capacity,
    };
    console.log(data, "data");

    await fetch("http://localhost:7089/event/create", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/dashboard");
  };

  return (
    <div>
      <div className="list">
        <p>Event name :</p>
        <input type="text" onChange={(e) => setEventName(e.target.value)} />
      </div>
      <div className="list">
        <p>Description :</p>
        <input type="text" onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className="list">
        <p>Start Date : </p>
        <input type="Date" onChange={(e) => setStartDate(e.target.value)} />
      </div>
      <div className="list">
        <p>End Date :</p>
        <input type="Date" onChange={(e) => setEndDate(e.target.value)} />
      </div>
      <div className="list">
        <p>Capacity :</p>
        <input type="number" onChange={(e) => setCapacity(e.target.value)} />
      </div>
      <button type="button" onClick={insertData}>
        Submit
      </button>
    </div>
  );
}

export default CreateEvent;
