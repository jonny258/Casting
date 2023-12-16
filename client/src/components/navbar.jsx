import React, { useState } from "react";
import Auth from "../utils/auth";
import SignUpForm from "./signup";
import LoginForm from "./login";

function NavBar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignup] = useState(false);
  return (
    <>
      <nav className="bg-gray-800 text-white p-4 w-full">
        <div className="flex justify-between items-center w-full">
          <div className="text-lg font-semibold">Stream Name</div>
          <div className="relative mx-auto" style={{ width: "600px" }}>
            <input
              type="text"
              placeholder="Search..."
              className="text-black w-full pl-4 pr-10 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            <button
              className="absolute right-0 top-0 h-full px-4 text-center text-gray-800 hover:text-blue-500 flex items-center justify-center"
              type="submit"
            >
              Search
            </button>
          </div>

          <div>
            <ul className="flex space-x-4">
              {!Auth.loggedIn() && (
                <li>
                  <a
                    href="#home"
                    className="hover:text-gray-300"
                    onClick={() => {
                      setShowLogin(true);
                    }}
                  >
                    Log-In
                  </a>
                </li>
              )}
              {!Auth.loggedIn() && (
                <li>
                  <a
                    href="#about"
                    className="hover:text-gray-300"
                    onClick={() => {
                      setShowSignup(true);
                    }}
                  >
                    Sign-Up
                  </a>
                </li>
              )}
              {Auth.loggedIn() && (
                <li>
                  <a
                    href="#services"
                    className="hover:text-gray-300"
                    onClick={() => {
                      Auth.logout();
                      setShowSignup(true);
                    }}
                  >
                    Log-Out
                  </a>
                </li>
              )}
              {Auth.loggedIn() && (
                <li>
                  <a href="#contact" className="hover:text-gray-300">
                    Profile
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {showSignUp && (
        <SignUpForm
          setShowSignup={setShowSignup}
          setShowLogin={setShowLogin}
          handleClose={() => {
            setShowSignup(false);
          }}
        />
      )}
      {showLogin && (
        <LoginForm
          setShowSignup={setShowSignup}
          setShowLogin={setShowLogin}
          handleClose={() => {
            setShowLogin(false);
          }}
        />
      )}
    </>
  );
}

export default NavBar;
