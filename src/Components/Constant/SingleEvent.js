import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function SingleEvent() {
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState();
  const [capacity, setCapacity] = useState();
  const [data, setData] = useState();
  const params = useParams();
  const navigate = useNavigate();
  const deleteEvent = async (id) => {
    await fetch(`http://localhost:7089/event/delete/${id}`, {
      method: "Delete",
    });
    axios.get("http://localhost:7089/event/list").then((response) => {
      setData(response.data);
    });
  };

  const getData = async () => {
    let result = await fetch(`http://localhost:7089/event/update/${params.id}`);
    result = await result.json();
    console.log(result);
    setData(result[0]);
    // setEventName(result[0].event_name);
    // setDescription(result[0].event_description);
    // setCapacity(result[0].capacity);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data?.event_name, "data is here");
  return (
    <div>
      <p>{data?.event_name}</p>
      <p>{data?.event_description}</p>
      <p>{data?.capacity}</p>
      <button type="button">Update</button>
      <button type="button" onClick={() => deleteEvent()}>
        Delete
      </button>
    </div>
  );
}

export default SingleEvent;
