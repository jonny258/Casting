import React, { useState, useRef, useEffect, useCallback } from "react";
import Camera from "../components/camera";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import ChatMessage from "../components/chatMessage";
import { io } from "socket.io-client";

function StartStream() {
  const [socketState, setSocketState] = useState(false);
  const [streamButton, setStreamButton] = useState(false);
  const messageRef = useRef();
  const roomRef = useRef();
  const socket = useRef(null);

  useEffect(() => {
    socket.current = io("http://localhost:3000");

    socket.current.on("connect", () => {
      console.log("You are connected! with id: " + socket.current.id);
      setSocketState(socket.current.id);
    });

    socket.current.on("receive-message", (message) => {
      alert(message);
    });

    return () => {
      socket.current.disconnect();
    };
  }, []);

  const sendMessageHandler = useCallback(async (e) => {
    socket.current.emit("send-message", messageRef.current.value, roomRef.current.value);
    messageRef.current.value = "";
  }, []);


  const joinRoomHandler = useCallback(async (e) => {
    console.log(roomRef.current.value);
    socket.current.emit("join-room", roomRef.current.value);
    roomRef.current.value = "";
  }, []);

  return (
    <>
      <Link to="/">Home</Link>
      {Auth.loggedIn() && <h1>{Auth.getProfile().data.username}</h1>}
      <button onClick={() => setStreamButton((prev) => !prev)}>
        {streamButton ? "Hide" : "Show"}
      </button>
      {streamButton && <Camera />}
      <div className="w-1/2">
        <ChatMessage />
        {socketState && <h1 className="text-2xl">Your socket id is {socketState}</h1>}
        <div className="join mt-5 flex">
          <div>
            <div>
              <input
                ref={messageRef}
                className="input input-bordered join-item"
                placeholder="Send message"
              />
            </div>
          </div>
          <div className="indicator">
            <button className="btn join-item" onClick={sendMessageHandler}>
              Send
            </button>
          </div>
        </div>
        <div className="join mt-5">
          <div>
            <div>
              <input
                ref={roomRef}
                className="input input-bordered join-item"
                placeholder="Room Code"
              />
            </div>
          </div>
          <div className="indicator">
            <button className="btn join-item" onClick={joinRoomHandler}>
              Join Room
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StartStream;
