/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import "../Style/LoginStyle.css";

function Dashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  useEffect(() => {
    axios.get("http://localhost:7089/event/list").then((response) => {
      setData(response.data);
    });
  }, []);

  const EventDetails = (id) => {
    navigate(`/eventDetail/${id}`);
  };

  return (
    <div>
      <NavBar />
      <div className="dashboard">
        {data?.map((item) => (
          <div className="eventList" onClick={() => EventDetails(item._id)}>
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
              <p>{item.start_date.split("T")[0]}</p>
            </div>
            <div className="list">
              <p>End Date :</p>
              <p>{item.end_date.split("T")[0]}</p>
            </div>
            <div className="list">
              <p>Capacity :</p>
              <p>{item.capacity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
