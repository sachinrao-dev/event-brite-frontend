import React, { useState } from "react";
import "../Style/LoginStyle.css";

function Login() {
  const [tokenValue, setTokenValue] = useState("");
  const TokenHandler = () => {
    console.log(tokenValue);
  };
  return (
    <div className="LoginContainer">
      <input placeholder="Please enter token......" className="TokenInput" onChange={(e) => setTokenValue(e.target.value)} />
      <button
        className="submit"
        type="button"
        onClick={TokenHandler}
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
