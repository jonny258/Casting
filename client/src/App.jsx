import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignUpForm from "./components/signup";
import LoginForm from "./components/login";
import Camera from "./components/camera";
import Auth from "../src/utils/auth";
import NavBar from "./components/navbar";
import Sidebar from "./components/sidebar";
import ImageSlider from "./components/imageslider";

function App() {
  const [count, setCount] = useState(0);

  const [streamButton, setStreamButton] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 p-4 overflow-auto">
        <ImageSlider />
        <ImageSlider />
        <ImageSlider />
        <ImageSlider />
        <ImageSlider />
          {Auth.loggedIn() && <h1>{Auth.getProfile().data.username}</h1>}
          <button onClick={() => setStreamButton((prev) => !prev)}>
            {streamButton ? "Hide" : "Show"}
          </button>
          {streamButton && <Camera />}
        </div>
      </div>
    </div>
  );
}

export default App;
