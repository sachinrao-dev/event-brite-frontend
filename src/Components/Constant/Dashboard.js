/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/LoginStyle.css";

function Dashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  useEffect(() => {
    axios.get("http://localhost:7089/event/list").then((response) => {
      setData(response.data);
    });
  }, []);
  const upDateHandler = (id) => {
    navigate(`/update/${id}`);
  };

  const deleteEvent = async (id) => {
    await fetch(`http://localhost:7089/event/delete/${id}`, {
      method: "Delete",
    });
    axios.get("http://localhost:7089/event/list").then((response) => {
      setData(response.data);
    });
  };

  return (
    <div>
      {data?.map((item) => (
        <div className="eventList">
          <div className="list">
            <p className="event">Event name : </p>
            <p>{item.event_name}</p>
          </div>
          <div className="list">
            <p>Description :</p>
            <p>{item.event_description}</p>
          </div>
          <div className="list">
            <p>Start date :</p>
            <p>{item.start_date}</p>
          </div>
          <div className="list">
            <p>End Date :</p>
            <p>{item.end_date}</p>
          </div>
          <div className="list">
            <p>Capacity :</p>
            <p>{item.capacity}</p>
          </div>
          <div className="action">
            <button type="button" onClick={() => upDateHandler(item._id)}>
              Update
            </button>
            <button type="button" onClick={() => deleteEvent(item._id)}>
              delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;