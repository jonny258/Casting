import React from "react";
import NavBar from "../components/navbar";
import Sidebar from "../components/sidebar";
import VideoPlayer from "../components/videoPlayer";
import StreamChat from "../components/streamChat";
import testVideo from "../assets/TestVideo.mp4";
import "../style/stream.css";

function WatchStream() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex p-4 overflow-auto">
          <div className="stream-video">
            {/* VideoPlayer component embedding the MP4 video */}
            <VideoPlayer src={testVideo} />
          </div>
          <div className="stream-chat-container overflow-auto">
            {/* StreamChat component to show chat messages */}
            <StreamChat />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchStream;
