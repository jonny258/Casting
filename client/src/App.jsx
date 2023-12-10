import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignUpForm from "./components/signup";
import LoginForm from "./components/login";
import Auth from "../src/utils/auth";

function App() {
  const [count, setCount] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignup] = useState(true);

  return (
    <>
      <button
        className="bg-blue-500"
        onClick={() => {
          Auth.logout();
          setShowSignup(true)
        }}
      >
        LOG OUT
      </button>
      {Auth.loggedIn() && <h1>{Auth.getProfile().data.username}</h1>}
      {showSignUp && (
        <SignUpForm setShowSignup={setShowSignup} setShowLogin={setShowLogin} />
      )}
      {showLogin && (
        <LoginForm setShowSignup={setShowSignup} setShowLogin={setShowLogin} />
      )}
    </>
  );
}

export default App;
