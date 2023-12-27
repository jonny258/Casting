import React, { useState, useRef, useEffect, useCallback } from "react";
import { io } from "socket.io-client";

const StreamChat = ({ streamRoom }) => {
  const chatMessages = [
    { id: 1, username: "MDCharged", text: "wow" },
    { id: 2, username: "Amiyahj", text: "that didnt hit" },
  ];

  const [chatState, setChatState] = useState(chatMessages);

  const streamId = streamRoom[0].toString() + streamRoom[1].toString();

  const socket = useRef(null);
  const messageRef = useRef();

  useEffect(() => {
    socket.current = io("http://localhost:3000");

    socket.current.on("connect", () => {
      console.log("You are connected! with id: " + socket.current.id);
      socket.current.emit("join-room", streamId);
    });

    socket.current.on("receive-message", (message) => {
      setChatState((prev) => [
        ...prev,
        { id: chatState.length + 1, username: "MDCharged", text: message },
      ]);
    });

    return () => {
      socket.current.disconnect();
    };
  }, []);

  const sendMessageHandler = useCallback(async (e) => {
    socket.current.emit("send-message", messageRef.current.value, streamId);
    messageRef.current.value = "";
  }, []);

  // const sendMessageHandler = () => {
  //   console.log(streamRoom);
  //   console.log(messageRef.current.value);
  //   messageRef.current.value = "";
  // };
  return (
    <div className="bg-base-200 p-4 h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <h1 className="text-xl font-bold">STREAM CHAT</h1>
        <ul className="menu p-0">
          {chatState.map((message) => (
            <li key={message.id} className="menu-item bg-base-100">
              <a>
                <span className="font-bold text-info">
                  {message.username}:{" "}
                </span>
                {message.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto">
        <div className="form-control">
          <div className="input-group">
            <input
              ref={messageRef}
              type="text"
              placeholder="Send a message"
              className="input input-bordered w-full"
            />
            <button className="btn btn-primary" onClick={sendMessageHandler}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamChat;
