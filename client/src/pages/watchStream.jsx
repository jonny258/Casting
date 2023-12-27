import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/navbar";
import Sidebar from "../components/sidebar";
import VideoPlayer from "../components/videoPlayer";
import StreamChat from "../components/streamChat";
import testVideo from "../assets/TestVideo.mp4";
import "../style/stream.css";

function WatchStream() {
  // Access the location object
  const location = useLocation();

  // Access the state passed to this route from the navigate function
  const { streamRoom } = location.state || {};

  // Use streamRoom as needed in your component, for example passing it to VideoPlayer
  // If streamRoom is not defined, you can have a fallback or a default value

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex p-4 overflow-auto">
          <div className="stream-video">
            {/* Pass streamRoom to VideoPlayer if needed */}
            <VideoPlayer src={testVideo} streamRoom={streamRoom} />
          </div>
          <div className="stream-chat-container overflow-auto">
            {/* Pass streamRoom to StreamChat if needed */}
            <StreamChat streamRoom={streamRoom} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchStream;
