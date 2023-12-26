import React from "react";

function VideoPlayer({ src }) {
  return (
    <video controls autoPlay muted>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoPlayer;
