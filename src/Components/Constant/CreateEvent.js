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
    <div className="insertDataForm">
      <div className="list">
        <p>Event name :</p>
        <input
          type="text"
          className="TextInput"
          onChange={(e) => setEventName(e.target.value)}
        />
      </div>
      <div className="list">
        <p>Description :</p>
        <input
          type="text"
          className="TextInput"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="list">
        <p>Start Date : </p>
        <input
          type="Date"
          className="TextInput"
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="list">
        <p>End Date :</p>
        <input
          type="Date"
          className="TextInput"
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div className="list">
        <p>Capacity :</p>
        <input
          type="number"
          className="TextInput"
          onChange={(e) => setCapacity(e.target.value)}
        />
      </div>
      <div className="insertButton">
        <button type="button" onClick={insertData}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default CreateEvent;
