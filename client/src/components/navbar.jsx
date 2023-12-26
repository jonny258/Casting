import React, { useState } from "react";
import Auth from "../utils/auth";
import SignUpForm from "./signup";
import LoginForm from "./login";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

function NavBar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignup] = useState(false);

  const handleLogout = () => {
    Auth.logout();
    // other logout logic if needed
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-none">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src={logo} className="w-10 mx-1" alt="Logo" />
            Stream Z
          </Link>
          <Link to="/startstream" className="btn btn-ghost btn-sm">
            Start Stream
          </Link>
        </div>
        <div className="flex-1 mx-2">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="flex-none">
          {!Auth.loggedIn() ? (
            <>
              <button
                className="btn btn-neutral btn-sm"
                onClick={() => setShowLogin(true)}
              >
                Log In
              </button>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => setShowSignup(true)}
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              {/* <Link to="/startstream" className="btn btn-ghost btn-sm">
                Start Stream
              </Link> */}
              <button className="btn btn-ghost btn-sm" onClick={handleLogout}>
                Log-Out
              </button>
              <Link to="/profile" className="btn btn-ghost btn-sm">
                Profile
              </Link>
            </>
          )}
        </div>
      </div>
      {showSignUp && (
        <SignUpForm
          setShowSignup={setShowSignup}
          setShowLogin={setShowLogin}
          handleClose={() => setShowSignup(false)}
        />
      )}
      {showLogin && (
        <LoginForm
          setShowSignup={setShowSignup}
          setShowLogin={setShowLogin}
          handleClose={() => setShowLogin(false)}
        />
      )}
    </>
  );
}

export default NavBar;
