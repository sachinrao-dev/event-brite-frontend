/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UpdateEvent() {
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [capacity, setCapacity] = useState();
  const params = useParams();

  const getData = async () => {
    let result = await fetch(`http://localhost:7089/event/update/${params.id}`);
    result = await result.json();
    setEventName(result[0].event_name);
    setDescription(result[0].event_description);
    setStartDate(result[0].start_date);
    setEndDate(result[0].end_date);
    setCapacity(result[0].capacity);
  };
  useEffect(() => {
    getData();
  }, []);
  const updateData = async () => {
    const updatedInfo = {
      event_name: eventName,
      event_description: description,
      star_date: `${new Date(startDate).toISOString().slice(0, -5)}Z`,
      end_date: `${new Date(endDate).toISOString().slice(0, -5)}Z`,
      capacity,
    };

    fetch(`http://localhost:7089/event/updatedEvent/${params.id}`, {
      method: "Put",
      body: JSON.stringify(updatedInfo),
      headers: {
        Content_Type: "Application/json",
      },
    });
    // result = await result.json();
    // console.log(result, "result");
  };
  return (
    <div>
      <div className="list">
        <p>Event name :</p>
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
      </div>
      <div className="list">
        <p>Description :</p>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="list">
        <p>Start Date : </p>
        <input
          type="Date"
          value={startDate?.split("T")[0]}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="list">
        <p>End Date :</p>
        <input
          type="Date"
          value={endDate?.split("T")[0]}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div className="list">
        <p>Capacity :</p>
        <input
          type="number"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        />
      </div>
      <button type="button" onClick={updateData}>
        Update
      </button>
    </div>
  );
}

export default UpdateEvent;
