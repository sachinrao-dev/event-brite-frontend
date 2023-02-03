/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/LoginStyle.css";

function Login() {
  const [tokenValue, setTokenValue] = useState();
  const [data, setData] = useState();
  const navigate = useNavigate();
  const TokenHandler = () => {
    axios
      .get(`http://localhost:7089/event/login/${tokenValue}`)
      .then((response) => {
        setData(response.data);
        const result = response.data;
        if (result.length) {
          navigate("/dashboard");
        }
        // console.log(result.length, "length is here");
        // console.log(response, "response");
        // if (response.data) {
        // console.log(data.length);
        // navigate("/dashboard");
        // }
      });

    // console.log("data is here", tokenValue, data);
  };
  return (
    <div className="LoginContainer">
      <input
        placeholder="Please enter token......"
        className="TokenInput"
        onChange={(e) => setTokenValue(e.target.value)}
      />
      <button className="submit" type="button" onClick={TokenHandler}>
        Submit
      </button>
    </div>
  );
}

export default Login;
