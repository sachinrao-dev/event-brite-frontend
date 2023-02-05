/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UpdateEvent() {
  const [eventName, setEventName] = useState();
  const [description, setDescription] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [capacity, setCapacity] = useState();
  const [data, setData] = useState();
  const params = useParams();
  const getData = async () => {
    let result = await fetch(`http://localhost:7089/event/update/${params.id}`);
    result = await result.json();
    // setEventName(result.event_name);
    setData(result);
  };
  console.log(data, "data is heres");
  useEffect(() => {
    getData();
  }, []);
  const updateData = () => {
    const updatedInfo = {
      event: eventName,
      desc: description,
      starDate: startDate,
      end: endDate,
      cap: capacity,
    };

    // fetch(`http://localhost:7089/event/updatedEvent/${params.id}`, {
    //   method: "Put",
    //   body: JSON.stringify(updatedInfo),
    // });

    console.log(updatedInfo);
  };
  return (
    <div>
      <div className="list">
        <p>Event name :</p>
        <input
          type="text"
          value={data?.event_name}
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
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="list">
        <p>End Date :</p>
        <input
          type="Date"
          value={endDate}
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
