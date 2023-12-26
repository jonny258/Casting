import React from "react";

const chatMessages = [
  { id: 1, username: "MDCharged", text: "wow" },
  { id: 2, username: "Amiyahj", text: "that didnt hit" },
];

const StreamChat = () => {
  return (
    <div className="bg-base-200 p-4 h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <h1 className="text-xl font-bold">STREAM CHAT</h1>
        <ul className="menu p-0">
          {chatMessages.map((message) => (
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
              type="text"
              placeholder="Send a message"
              className="input input-bordered w-full"
            />
            <button className="btn btn-primary">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamChat;
