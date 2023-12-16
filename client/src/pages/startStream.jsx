import React, { useState } from "react";
import Camera from "../components/camera";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function StartStream() {
  const [streamButton, setStreamButton] = useState(false);
  return (
    <>
    <Link to="/">Home</Link>
      {Auth.loggedIn() && <h1>{Auth.getProfile().data.username}</h1>}
      <button onClick={() => setStreamButton((prev) => !prev)}>
        {streamButton ? "Hide" : "Show"}
      </button>
      {streamButton && <Camera />}
    </>
  );
}

export default StartStream;
