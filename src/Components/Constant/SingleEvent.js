/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function SingleEvent() {
  const [data, setData] = useState();
  const params = useParams();
  const navigate = useNavigate();
  const deleteEvent = async () => {
    await fetch(`http://localhost:7089/event/delete/${params.id}`, {
      method: "Delete",
    });
    axios.get("http://localhost:7089/event/list").then((response) => {
      setData(response.data);
      navigate("/dashboard");
    });
  };

  const getData = async () => {
    let result = await fetch(`http://localhost:7089/event/update/${params.id}`);
    result = await result.json();
    setData(result[0]);
  };
  useEffect(() => {
    getData();
  }, []);

  const upDateHandler = () => {
    navigate(`/update/${params.id}`);
  };
  return (
    <div className="eventDetails">
      <div className="list">
        <p>Event Name :</p>
        <p>{data?.event_name}</p>
      </div>
      <div className="list">
        <p>Description :</p>
        <p>{data?.event_description}</p>
      </div>
      <div className="list">
        <p>Capacity :</p>
        <p>{data?.capacity}</p>
      </div>
      <div className="insertButton">
        <button type="button" onClick={() => upDateHandler()}>
          Update
        </button>
        <button type="button" onClick={() => deleteEvent()}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default SingleEvent;
