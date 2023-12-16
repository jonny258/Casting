import { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import StartStream from "./pages/startStream";

function App() {
  const [count, setCount] = useState(0);

  const [streamButton, setStreamButton] = useState(false);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/startstream" element={<StartStream />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
